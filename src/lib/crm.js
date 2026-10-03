/**
 * CRM submission utility.
 * Extend this to call a real API endpoint, Zapier webhook, or email service.
 *
 * @param {string} formType - e.g. "contact"
 * @param {Object} payload   - form data
 * @returns {Promise<void>}  - resolves on success, rejects on failure
 */
export async function submitToCrm(formType, payload) {
  // TODO: replace with your real CRM / email endpoint
  const endpoint = process.env.NEXT_PUBLIC_CRM_ENDPOINT;

  if (endpoint) {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formType, ...payload }),
    });

    if (!res.ok) {
      throw new Error(`CRM submission failed: ${res.status}`);
    }
    return;
  }

  // Development fallback — simulate a short delay and succeed
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("[CRM stub]", formType, payload);
}
