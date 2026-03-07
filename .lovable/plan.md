

## Plan: Update Privacy Policy and Standardize Contact Email

### Adjustments per user instructions:
1. **Cookies**: Keep cookie/analytics references as-is from the document. Adjust cookie banner language to say "when we use cookies, a cookie banner will be displayed" (future-tense).
2. **Azure/Cloudflare**: Keep as-is (used in broader Smartcare infrastructure).
3. **Contact email**: Use `compliance@smartcare.africa` for all compliance/DPO references. Remove `dpo@smartcare.africa`.
4. **Retain** other email references (`info@smartcare.africa`, `partnerships@smartcare.africa`).

### Implementation Steps

**1. Rewrite `src/pages/PrivacyPolicy.tsx`**
Replace the entire page content with the document's full text, structured into these sections:
- Introduction (with NDP Act/CFRN references)
- Guiding Principles on Data Processing
- Scope of Data Processing (data collection table rendered as a styled table)
- Rights of Data Subjects (including SNAG process)
- Transfer of Data to Third Parties and Countries
- Disclosure of Information
- Technical Information and Cookies — adjust cookie banner sentence to: "When cookies are used on our website, you will be presented with a cookie banner requesting your consent."
- Data Security and Integrity
- Purpose and Storage Limitation
- Data Retention
- Children
- Alteration of Privacy Policy
- Contact Information: `compliance@smartcare.africa`, effective date "February 2026"

**2. Update `src/pages/DataProtection.tsx`**
- Change `dpo@smartcare.africa` to `compliance@smartcare.africa` in the Data Protection Officer section

**3. Update `src/components/Footer.tsx`**
- No changes needed (already uses generic link text)

### Files modified:
- `src/pages/PrivacyPolicy.tsx` — full rewrite with document content
- `src/pages/DataProtection.tsx` — email change only

