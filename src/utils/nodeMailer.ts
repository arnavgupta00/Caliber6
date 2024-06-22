


export default async function sendEmail(
  from: string,
  subject: string,
  text: string,
  fullName: string,
  mobile: string
) {
  const response = await fetch("/api/send-email", {
    method: "POST",
    body: JSON.stringify({ from, subject, text, fullName, mobile }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
}
