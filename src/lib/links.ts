/**
 * Centralized placeholder links. Replace the `#` values with real URLs when
 * they are available. Any link still set to PLACEHOLDER is treated as
 * "coming soon" by the shared PlaceholderLink component.
 */
export const PLACEHOLDER = "#" as const;

export const JOIN_FORM_URL: string = PLACEHOLDER;
export const MAILING_LIST_URL: string = PLACEHOLDER;
export const EVENTS_REGISTRATION_URL: string = PLACEHOLDER;
export const SPONSOR_INQUIRY_URL: string = PLACEHOLDER;
export const LINKEDIN_URL: string = PLACEHOLDER;
export const CONTACT_EMAIL: string = "hello@example.com"; // placeholder address

/** Stanford University giving portal for TEA gifts. */
export const STANFORD_GIVING_URL = "https://give.stanford.edu/" as const;

/** TEA student leadership — for support / involvement inquiries. */
export const TEA_TEAM_EMAILS = [
  "lyled@stanford.edu",
  "judestj@stanford.edu",
  "faberry@stanford.edu",
  "elleson@stanford.edu",
  "wboyler@stanford.edu",
  "thumay@stanford.edu",
  "jayuk@stanford.edu",
  "mamayag@stanford.edu",
] as const;

const TEA_TEAM_MAIL_SUBJECT = "Interest in Supporting TEA at Stanford";
const TEA_TEAM_MAIL_BODY = `Hello TEA at Stanford team,

I'm reaching out because I'm interested in supporting or getting involved with TEA at Stanford.

[Please share a little about yourself and how you would like to connect.]

Best,`;

/** Prefills subject + body for Contact the TEA Team. */
export const TEA_TEAM_MAILTO = `mailto:${TEA_TEAM_EMAILS.join(",")}?subject=${encodeURIComponent(TEA_TEAM_MAIL_SUBJECT)}&body=${encodeURIComponent(TEA_TEAM_MAIL_BODY)}`;

/** Real, live club Instagram. */
export const INSTAGRAM_HANDLE = "@tea.stanford" as const;
export const INSTAGRAM_URL: string = "https://www.instagram.com/tea.stanford/";

/** Real portfolio of themed-entertainment project work. */
export const PORTFOLIO_URL: string =
  "https://www.judestjohn.com/projects/themed-entertainment";

export function isPlaceholder(url: string): boolean {
  return url === PLACEHOLDER;
}
