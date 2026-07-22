---
layout: ../../layouts/BaseLayout.astro
title: "Sokoyuku Terms of Service"
description: "Official Sokoyuku terms of service."

---

# Sokoyuku Terms of Service

**Effective Date:** July 21, 2026
**Last Updated:** July 21, 2026

Welcome to Sokoyuku! These Terms of Service ("Terms") govern your use of the Sokoyuku web service, website, network, applications, APIs, and any related services provided by us (collectively, the "Service").

PLEASE READ THE FOLLOWING TERMS CAREFULLY. BY REGISTERING FOR AN ACCOUNT, OR BY ACCESSING OR USING THE SERVICE, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS, ALONG WITH OUR [PRIVACY POLICY](/legal/privacy) AND [COOKIE POLICY](/legal/cookies). If you are not eligible, or do not agree to the Terms, then you do not have our permission to use the Service.

## 1. Who We Are and Service Overview

Sokoyuku is a web service owned and operated by Sokoyuku Limited ("Sokoyuku," "we," "us," or "our"). Our Service provides a platform where users can create AI prototypes, instantiate them as models, and integrate them with third-party messaging platforms such as Telegram, Discord, and Matrix.

## 2. Eligibility and Accounts

### 2.1 Minimum Age

The Service is strictly not intended for minors. To access and use Sokoyuku, you must be at least eighteen (18) years of age, or the age of legal majority in your jurisdiction of residence, whichever is higher. By agreeing to these Terms, you represent and warrant that you meet these age requirements and have the legal capacity to enter into a binding contract. If you do not meet these requirements, you must not access or use Sokoyuku.

### 2.2 Account Registration

To use the Service, you must register and open an account. You may register using your email address and a password, or by using a supported third-party authentication provider (such as Google or Telegram). If you sign in using a third-party provider and do not already have an account, an account will be automatically created for you. By registering or signing in via a third-party provider, you authorize us to access and use the information provided by that service as outlined in our Privacy Policy. You must provide accurate, complete, and up-to-date information. You are solely responsible for maintaining the confidentiality of your account credentials (including the security of your linked third-party accounts) and for all activities that occur under your account. If you believe your account has been compromised, you must immediately notify us at <support@sokoyuku.com>.

### 2.3 Account Types: Prototype Creators and Model Users

Users on Sokoyuku generally fall into two categories (and you may act as both):

- **Prototype Creators:** Users who design, configure, and publish AI prototypes.
- **Model Users:** Users who interact with, chat with, and consume tokens or subscriptions for models (which are instances of prototypes).

### 2.4 Connected Bot Accounts

You may connect your Telegram bots, Discord bots, or Matrix accounts (collectively, "Connected Accounts") to the Service by uploading the necessary bot or account credentials. You represent and warrant that you are the rightful owner or authorized administrator of any Connected Accounts you link to Sokoyuku.

## 3. Contract Between Model User and Prototype Creator

### 3.1 Direct Relationship

When a Model User subscribes to a Prototype Creator's model or consumes tokens by chatting with a token-type model, the Model User and the Prototype Creator enter into a direct binding contract between themselves (the "Contract between Model User and Prototype Creator").

### 3.2 Role of Sokoyuku

Sokoyuku facilitates this interaction by providing the platform and routing the messages, but we are not a party to the Contract between Model User and Prototype Creator. We do not choose, endorse, authorize, approve, or guarantee the completeness, legitimacy, legality, accuracy, or reliability of any prototypes created by Prototype Creators. Any disputes regarding the performance, quality, or output of a model must be resolved directly between the Model User and the Prototype Creator.

## 4. The Sokoyuku Service and AI Outputs

### 4.1 Prototypes and Models

Sokoyuku allows Prototype Creators to create AI "prototypes." Prototypes can be configured as either private (accessible only to the creator) or public, except for "local prototypes" (managed by a Local Conductor), which are strictly private. Users can add prototypes as "models," which are active instances of a prototype.

### 4.2 Messaging and Integrations (Proxying)

Sokoyuku acts as an intermediary routing service. We receive messages from your Connected Accounts and relay them to the models assigned to those accounts. We then receive messages or action requests from the models and proxy them back to the Connected Accounts via the accounts' respective platform APIs.

- **No Content Storage:** Sokoyuku does not store any message contents received from users' Connected Accounts or generated by the models.
- **Metadata Storage:** We may collect, store, and process metadata regarding messages and usage (e.g., token counts, timestamps, error logs) for analytics, billing, and operational purposes.

### 4.3 AI Inputs and Outputs

You may provide input into the Services ("Input") and receive an output from the models ("Output"). You are solely responsible for evaluating the Output for accuracy and appropriateness for your use case.

- **Accuracy Disclaimer:** Given the probabilistic nature of machine learning, use of our Services may result in Output that does not accurately reflect real people, places, or facts. You should not rely on Output as a sole source of truth or factual information, or as a substitute for professional advice.
- **Prohibited Use of Output:** You must not represent that Output was human-generated when it was not. You must not use Output to develop models that compete with Sokoyuku or the underlying AI providers.
- **Ownership of Output:** As between you and Sokoyuku, and to the extent permitted by applicable law, you own all Input and all Output generated by the models in response to your Input. Sokoyuku hereby assigns to you all its right, title, and interest (if any) in and to such Output.

### 4.4 Local Conductors and Local Components

Users may opt to host and operate their own "Local Conductor" software. A Local Conductor is designed to work exclusively with specific local components that must all belong to the same user:

- **Local Conductor:** A user-hosted software component that manages local prototypes and routes messages locally.
- **Local Prototypes:** Prototypes explicitly designated as "local" upon creation. They are strictly private and can only be managed by your Local Conductor.
- **Local Models:** Active instances of a Local Prototype.
- **Local Accounts:** Connected Accounts explicitly designated as "local" upon creation.

If you use a Local Conductor and these associated local components:

- **Infrastructure:** You are solely responsible for the operation, security, maintenance, and uptime of the hardware and network where the Local Conductor is hosted.
- **Encryption:** Local account tokens and local model settings are encrypted client-side using your public key before being uploaded. Sokoyuku cannot decrypt this data or recover it if you lose your private key.
- **Authentication:** Your public key is used as the token for authentication between your Local Conductor and Sokoyuku's services.
- **Liability:** Sokoyuku is not liable for any downtime, data breaches, or loss of functionality resulting from your local infrastructure. You remain fully responsible for ensuring your Local Conductor complies with our Acceptable Use Policy and all applicable third-party platform terms.

## 5. Subscriptions, Credits, and Payments

### 5.1 Platform and Model Subscriptions

- **Model Subscriptions:** Model Users may subscribe to models designated as the "subscription type." A valid subscription is required to use these models.
- **Platform Subscriptions:** Sokoyuku offers platform-level subscription plans for enhanced platform features. These are independent of and separate from model subscriptions.

### 5.2 Credits and Token Billing

Model Users can purchase credits on the platform. Credits are used to pay for input and output tokens consumed during chats with models designated as the "token type." Once purchased, credits are applied to your account balance. If an attempted interaction requires more credits than your available balance, the interaction will fail.

### 5.3 Payment Processing

Sokoyuku does not directly process payments or hold funds. We use third-party payment processors (such as Stripe), to securely facilitate all transactions. By providing payment information, you authorize our third-party payment processors to charge your payment method for all applicable fees. You acknowledge and agree that your transactions are subject to the terms and conditions of the respective third-party payment processor. Sokoyuku is not liable for any delays, errors, or issues arising from the performance or failure of our payment providers. All payments are processed in USD unless otherwise specified.

### 5.4 Automatic Renewal

Subscriptions will automatically renew at the end of your chosen subscription period. Your payment method will be charged the current price for the renewal unless you cancel your subscription before the billing date. You may cancel auto-renewal at any time through your account settings.

### 5.5 Refunds and Chargebacks

**All sales, including credit purchases and subscriptions, are final and non-refundable**, except where required by mandatory local law.

- You agree not to make unjustified requests for a refund or unjustified chargeback requests of your payment card provider.
- If you make a purchase that results in a chargeback, Sokoyuku reserves the right to immediately suspend or permanently terminate your account, and deduct the disputed amounts (along with any associated fees) from your or the associated Prototype Creator's balance.

### 5.6 Taxes

Service prices may be displayed exclusive of taxes. You are responsible for paying any applicable sales tax, value-added tax (VAT), goods and services tax (GST), or other taxes associated with your purchases.

## 6. Creator Payouts and Obligations

### 6.1 Creator Earnings

Prototype Creators earn a percentage of the gross revenue generated by their models (from subscriptions or token usage), after Sokoyuku deducts platform fees, payment processing fees (e.g., from third-party payment processors such as Stripe), and any applicable taxes. All transactions, account balances, and payouts are calculated and processed in United States Dollars (USD).

### 6.2 Payout Processing and Identity Verification

Sokoyuku does not hold Creator funds. Payouts are processed and distributed exclusively via our third-party payment processors (e.g., Stripe Connect or equivalent). To receive payouts, Prototype Creators must connect a valid bank account or approved payment method directly with the payment processor. You must complete all identity verification (KYC) and anti-money laundering (AML) checks required by the payment processor. Failure to provide accurate identity documentation will result in withheld payouts. By setting up a payout account, you agree to the applicable third-party payment processor's terms of service (such as the Stripe Connected Account Agreement). Sokoyuku bears no liability for delayed payouts caused by the payment processor.

### 6.3 Payout Logistics and Thresholds

Creator Earnings will only be transferred to your connected bank account once your available balance meets the minimum payout threshold (e.g., $50 USD). Funds typically become available for withdrawal after a mandatory clearing period to account for potential fraud or chargebacks.

### 6.4 Chargebacks and Negative Balances

If a Model User initiates a chargeback or successfully claims a refund for a transaction involving your model, the corresponding Creator Earnings will be deducted from your Sokoyuku account balance. If chargebacks cause your account balance to become negative, any future earnings will be applied to the negative balance until it is resolved.

### 6.5 Tax Compliance

Prototype Creators function as independent entities. You are solely responsible for your own tax affairs. You warrant that you have reported, and will report in the future, all payments you receive in connection with your use of Sokoyuku to the relevant tax authorities in your jurisdiction, as required by law. Depending on your location, Sokoyuku or Stripe may require you to submit specific tax forms (e.g., W-9, W-8BEN) before issuing payouts. Sokoyuku is not liable for any creator's non-payment of taxes.

## 7. User Content and Intellectual Property

### 7.1 Ownership of Content

You retain all ownership rights to the prompts, context, and structural configurations you provide when creating a prototype ("Prototype Configurations"). You warrant that you own your Prototype Configurations or hold all rights necessary, including licenses, to post and monetize the Prototype Configurations on Sokoyuku.

### 7.2 License to Sokoyuku

By making a prototype public on the Service, you grant Sokoyuku a non-exclusive, worldwide, royalty-free, sublicensable, and transferable license to host, store, reproduce, publicly display, and make your prototype available for other users to instantiate as models.

### 7.3 Sokoyuku Intellectual Property

The Service and its entire contents, features, functionality, and architecture are owned by Sokoyuku Limited and its licensors, and are protected by international copyright, trademark, patent, and trade secret laws. You may not reproduce, distribute, modify, create derivative works of, reverse engineer, or commercially exploit any part of our Service without our express written consent.

### 7.4 DMCA and Copyright Infringement Policy

Sokoyuku respects the intellectual property of others and requires that our users do the same. We respond to notices of alleged copyright infringement in accordance with the U.S. Digital Millennium Copyright Act (DMCA) and other applicable laws.

If you believe that your intellectual property rights have been infringed by a prototype, model, or User Content on Sokoyuku, please send a written notice to our designated Copyright Agent at **<support@sokoyuku.com>** with the following information:

1. An electronic or physical signature of the person authorized to act on behalf of the copyright owner.
2. A description of the copyrighted work that you claim has been infringed.
3. A description of where the allegedly infringing material is located on the Service (e.g., a link to the specific model).
4. Your address, telephone number, and email address.
5. A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law.
6. A statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf.

We reserve the right to delete or disable content alleged to be infringing and to terminate accounts of repeat infringers.

## 8. Acceptable Use and Prohibited Conduct

By using the Service, you agree not to use Sokoyuku for any illegal, harmful, or abusive activity. You must use the models yourself; you may not redistribute, resell, or commercialize access to the models outside of the permitted platform functionalities.

Without our express prior written authorization, **YOU SHALL NOT** use Sokoyuku or the underlying AI models to generate, promote, or distribute any of the following, nor engage in the following activities:

### 8.1 Prohibited Content

1. **Illegal Activities:** Content that violates any applicable local, state, national, or international law or regulation.
2. **Child Exploitation:** Any material that exploits, harms, or threatens minors, including Child Sexual Abuse Material (CSAM). We operate a zero-tolerance policy and will report such activity to law enforcement (e.g., NCMEC).
3. **Non-Consensual Intimate Imagery (NCII):** Content that depicts identifiable individuals in sexually explicit situations without their consent (e.g., "revenge porn" or non-consensual deepfakes).
4. **Violence and Hate Speech:** Content that promotes, glorifies, or provides instructions on how to commit violence against others or self-harm, or content that attacks or degrades individuals based on race, ethnicity, religion, sexual orientation, disability, or gender identity.
5. **Harassment and Doxxing:** Content used to stalk, harass, intimidate, or reveal private/identifying information about individuals without their consent.

### 8.2 Platform and API Abuse

1. **Scraping and Automation:** Automatically or programmatically extract data, models, or Output from the Service (e.g., scraping).
2. **Adversarial Attacks (Red Teaming):** Conduct "Red Teaming" (e.g., prompt injection, jailbreaking, or adversarial attacks designed to compromise the underlying AI models) against models hosted on Sokoyuku, unless you are explicitly testing a private prototype you own for legitimate security research.
3. **Spam and Phishing:** Use your Connected Accounts (Telegram, Discord, Matrix) powered by Sokoyuku to send unsolicited bulk messages, spam, or phishing links.
4. **Evasion of Bans:** Create multiple accounts or use alternative bot credentials to bypass a suspension or ban on Sokoyuku or a connected third-party platform.
5. **Platform Abuse:** Leverage your Connected Accounts to develop external services or applications that diverge significantly from the intended use cases of Sokoyuku.

### 8.3 Misrepresentation and Deceptive Use

1. **Impersonation:** Configure prototypes to impersonate real individuals, public figures, or organizations without clear, prominent disclosure that the model is an AI parody or parody account.
2. **Deceptive Outputs:** Represent that AI-generated output from Sokoyuku was entirely human-generated.
3. **Professional Advice:** Use the models to generate or provide professional advice (e.g., diagnosing medical conditions, providing legal counsel) where such advice requires a licensed professional.

### 8.4 Enforcement

Sokoyuku actively monitors for compliance with these rules. If we determine, in our sole discretion, that you have violated this section, we may take actions including removing offending prototypes, suspending or permanently terminating your account, withholding pending Creator Earnings, and reporting the activity to relevant third-party platforms (e.g., Telegram, Discord) or law enforcement authorities.

## 9. Third-Party Integrations and Bot API Liability

### 9.1 Third-Party Platforms

Sokoyuku allows you to register via third-party authentication providers and connect your prototypes to third-party platforms like Telegram, Discord, and Matrix. You acknowledge that these platforms are operated by independent third parties and that Sokoyuku operates independently of them.

- You must strictly adhere to the Terms of Service, API Guidelines, and Acceptable Use Policies of any third-party platform you authenticate with or connect to Sokoyuku (e.g., Google Terms of Service, Telegram Terms of Service for Bots).
- If your bot or account is banned, restricted, or terminated by Telegram, Discord, Matrix, or Google due to your violation of their rules, Sokoyuku bears no liability for any resulting loss of functionality, revenue, or data.

### 9.2 Disclaimer of Third-Party Liability

You expressly agree not to hold Sokoyuku liable for any mismanagement, downtime, API changes, or account bans initiated by third-party platforms (Telegram, Discord, Matrix). Any disputes, claims, or technical errors related to these third-party platforms must be directed towards the respective platform provider.

## 10. Disclaimer of Warranties

THE SERVICE, INCLUDING ALL MODELS, PROTOTYPES, WEBSITES, AND APIS, IS PROVIDED "AS IS" AND ON AN "AS AVAILABLE" BASIS. EXCEPT TO THE EXTENT PROHIBITED BY LAW, SOKOYUKU LIMITED DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.

WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, ACCURATE, OR ERROR-FREE. YOU ACCEPT AND AGREE THAT ANY USE OF OUTPUTS FROM OUR SERVICE IS AT YOUR SOLE RISK.

## 11. Limitation of Liability

TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL SOKOYUKU LIMITED, ITS DIRECTORS, EMPLOYEES, AFFILIATES, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, STATUTORY, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, LOSS OF REVENUE, LOSS OF DATA, BUSINESS INTERRUPTION, OR LOSS OF GOODWILL, ARISING OUT OF OR RELATING TO YOUR ACCESS TO OR USE OF THE SERVICE.

IN NO EVENT SHALL SOKOYUKU'S AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS EXCEED THE GREATER OF: (A) THE AMOUNT YOU HAVE PAID TO SOKOYUKU FOR ACCESS TO THE SERVICE IN THE TWELVE (12) MONTHS PRIOR TO THE EVENT GIVING RISE TO THE LIABILITY; OR (B) ONE HUNDRED U.S. DOLLARS ($100.00 USD).

## 12. Indemnification

You agree to defend, indemnify, and hold harmless Sokoyuku Limited, its affiliates, licensors, and service providers from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to:

1. Your violation of these Terms or any applicable law or regulation.
2. Your use of the Service, including any Input, Output, prototypes, connected bot accounts, or Local Conductors you create, host, or operate.
3. Any disputes between you and another user (e.g., between a Prototype Creator and a Model User).
4. Your actual or alleged violation of any third-party platform's rules (e.g., Telegram, Discord).

## 13. Suspension and Termination

### 13.1 Termination by You

You may terminate your account at any time by contacting support or using the account deletion tools provided within the Service.

### 13.2 Termination by Sokoyuku

We may suspend or terminate your account, your access to the Service, or any prototypes/models you operate at any time, for any reason, with or without notice. Reasons for termination include, but are not limited to: violation of these Terms, failure to pay fees, or actions that pose a legal or security risk to Sokoyuku.

- If we terminate your account for violating these Terms, any prepaid subscriptions or credits are non-refundable, and any pending creator payouts may be withheld.

## 14. General Provisions

### 14.1 Governing Law and Jurisdiction

These Terms shall be governed by and construed in accordance with the laws of the Hong Kong Special Administrative Region of the People's Republic of China, without regard to its conflict of law principles. You agree that the courts of Hong Kong shall have exclusive jurisdiction to settle any dispute or claim that arises out of or in connection with these Terms.

### 14.2 Modifications to the Terms

We may revise these Terms from time to time to reflect changes in our business, the law, or the Service. We will provide notice of material changes by posting an update on our website or sending you an email. Your continued use of the Service after the effective date of the revised Terms constitutes your acceptance of the changes.

### 14.3 Severability and Waiver

If any provision of these Terms is held to be invalid or unenforceable, that provision shall be limited or eliminated to the minimum extent necessary so that the remaining provisions will remain in full force and effect. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.

### 14.4 Entire Agreement

These Terms, along with our [Privacy Policy](/legal/privacy) and [Cookie Policy](/legal/cookies), constitute the entire agreement between you and Sokoyuku Limited regarding the Service, and supersede any prior agreements between us regarding the Service.

### 14.5 Interpretation

To the fullest extent permitted by applicable law, Sokoyuku Limited reserves the right to make the final determination regarding the interpretation and application of these Terms.

***

**Contact Information**\
If you have any questions about these Terms, please contact us at:\
**Sokoyuku Limited**\
Hong Kong\
Email: <support@sokoyuku.com>
