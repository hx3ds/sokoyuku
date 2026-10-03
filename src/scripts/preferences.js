import { catalogs } from "../i18n/catalogs.js";

const LOCALE_STORAGE_KEY = "sokoyuku-locale";

const LOCALES = [
	{ id: "en", code: "EN", nativeLabel: "English", htmlLang: "en" },
	{ id: "jp", code: "JP", nativeLabel: "日本語", htmlLang: "ja" },
	{ id: "zh-Hans", code: "CN", nativeLabel: "简体中文", htmlLang: "zh-Hans" },
	{ id: "zh-Hant", code: "TW", nativeLabel: "繁體中文", htmlLang: "zh-Hant" },
];

const LOCALE_IDS = new Set(LOCALES.map((item) => item.id));

const ALIASES = [
	{ test: (tag) => tag === "jp" || tag === "ja" || tag.startsWith("ja-"), id: "jp" },
	{
		test: (tag) =>
			tag === "zh-hant" ||
			tag.startsWith("zh-hant") ||
			tag === "zh-tw" ||
			tag === "zh-hk" ||
			tag === "zh-mo" ||
			tag.startsWith("zh-tw") ||
			tag.startsWith("zh-hk") ||
			tag.startsWith("zh-mo"),
		id: "zh-Hant",
	},
	{
		test: (tag) =>
			tag === "zh-hans" ||
			tag.startsWith("zh-hans") ||
			tag === "zh-cn" ||
			tag === "zh-sg" ||
			tag === "zh-my" ||
			tag.startsWith("zh-cn") ||
			tag === "zh",
		id: "zh-Hans",
	},
	{ test: (tag) => tag === "en" || tag.startsWith("en-"), id: "en" },
];

function matchLocale(tag) {
	const normalized = String(tag || "").trim().replace(/_/g, "-").toLowerCase();
	if (!normalized) return null;
	if (LOCALE_IDS.has(tag)) return tag;
	for (const alias of ALIASES) {
		if (alias.test(normalized)) return alias.id;
	}
	return null;
}

function readStoredLocale() {
	try {
		return matchLocale(localStorage.getItem(LOCALE_STORAGE_KEY));
	} catch {
		return null;
	}
}

function detectBrowserLocale() {
	const tags = [];
	if (Array.isArray(navigator.languages)) tags.push(...navigator.languages);
	if (navigator.language) tags.push(navigator.language);
	for (const tag of tags) {
		const matched = matchLocale(tag);
		if (matched) return matched;
	}
	return "en";
}

function localeMeta(id) {
	return LOCALES.find((item) => item.id === id) || LOCALES[0];
}

function applyDocumentLang(id) {
	document.documentElement.lang = localeMeta(id).htmlLang;
}

function t(key, vars) {
	if (key == null || key === "") return "";
	const source = String(key);
	const dict = catalogs[localeId];
	let text = (dict && dict[source]) || source;
	if (vars) {
		for (const [name, value] of Object.entries(vars)) {
			text = text.replaceAll(`{${name}}`, String(value ?? ""));
		}
	}
	return text;
}

let localeId = readStoredLocale() || detectBrowserLocale();

function applyI18n() {
	applyDocumentLang(localeId);
	document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
		const key = el.getAttribute("data-i18n-aria");
		el.setAttribute("aria-label", t(key));
	});
	document.querySelectorAll("[data-i18n]").forEach((el) => {
		const key = el.getAttribute("data-i18n");
		const vars = el.hasAttribute("data-i18n-year")
			? { year: el.getAttribute("data-i18n-year") }
			: undefined;
		el.textContent = t(key, vars);
	});
	const root = document.documentElement;
	const titleKey = root.getAttribute("data-i18n-title");
	if (titleKey) {
		const title = t(titleKey);
		document.title = title;
		document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
	}
	const descKey = root.getAttribute("data-i18n-description");
	if (descKey) {
		const desc = t(descKey);
		document.querySelector('meta[name="description"]')?.setAttribute("content", desc);
		document.querySelector('meta[property="og:description"]')?.setAttribute("content", desc);
	}
}

function syncPickers() {
	const localePicker = document.querySelector('[data-pref="locale"]');
	if (localePicker) {
		const label = localePicker.querySelector("[data-locale-label]");
		const meta = localeMeta(localeId);
		if (label) label.textContent = meta.code;
		localePicker.querySelectorAll(".pref-option").forEach((option) => {
			const selected = option.dataset.value === localeId;
			option.setAttribute("aria-selected", selected ? "true" : "false");
		});
	}
}

function closePicker(picker) {
	picker.classList.remove("open");
	picker.querySelector(".pref-trigger")?.setAttribute("aria-expanded", "false");
	const menu = picker.querySelector(".pref-menu");
	if (menu) menu.hidden = true;
}

function closePickers(except) {
	document.querySelectorAll(".pref-picker.open").forEach((picker) => {
		if (picker !== except) closePicker(picker);
	});
}

function closeThemeMenu() {
	const themePicker = document.querySelector(".theme-picker");
	if (themePicker) themePicker.open = false;
}

function setLocale(id) {
	localeId = matchLocale(id) || "en";
	try {
		localStorage.setItem(LOCALE_STORAGE_KEY, localeId);
	} catch {
		void 0;
	}
	applyI18n();
	syncPickers();
}

function wirePickers() {
	document.querySelectorAll('[data-pref="locale"]').forEach((picker) => {
		const trigger = picker.querySelector(".pref-trigger");
		const menu = picker.querySelector(".pref-menu");
		if (!trigger || !menu) return;
		trigger.addEventListener("click", (event) => {
			event.stopPropagation();
			const willOpen = !picker.classList.contains("open");
			closePickers();
			closeThemeMenu();
			if (!willOpen) return;
			picker.classList.add("open");
			trigger.setAttribute("aria-expanded", "true");
			menu.hidden = false;
		});
		menu.addEventListener("click", (event) => {
			const option = event.target.closest(".pref-option");
			if (!option) return;
			const value = option.dataset.value;
			setLocale(value);
			closePicker(picker);
		});
	});

	document.addEventListener("click", (event) => {
		closePickers();
		const themePicker = document.querySelector(".theme-picker");
		if (themePicker && !themePicker.contains(event.target)) closeThemeMenu();
	});
	document.addEventListener("keydown", (event) => {
		if (event.key !== "Escape") return;
		closePickers();
		closeThemeMenu();
	});
}

applyI18n();
syncPickers();
wirePickers();
