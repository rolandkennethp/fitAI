import { CoachAction, CoachMessage } from "@/types/coach";

const MOCK_LATENCY_MS = 700;

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function id() {
  return `coach-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

/**
 * Very small canned-response mock so the panel feels alive during frontend
 * development. Real intelligence (Gemini) lives entirely on the backend —
 * see requirements.md section 16: the AI returns a structured action, the
 * backend validates it, then the DB is updated. Replace this function body
 * with a POST /api/coach/message call that returns { reply, action }.
 */
export async function sendCoachMessage(
  userText: string,
): Promise<CoachMessage> {
  await wait(MOCK_LATENCY_MS);

  const text = userText.toLowerCase();
  let reply =
    "Got it — I'll factor that in. (Connect the backend to make this real.)";
  let action: CoachAction | undefined;

  if (text.includes("skip")) {
    reply =
      "No problem. I can shift the rest of this week so nothing overlaps.";
    action = {
      type: "reschedule_workout",
      summary: "Reschedule remaining sessions",
    };
  } else if (text.includes("minute") || text.includes("time")) {
    reply =
      "I can trim today's workout to fit that. Want me to drop the isolation sets first?";
    action = { type: "shorten_workout", summary: "Shorten today's session" };
  } else if (
    text.includes("replace") ||
    text.includes("cable") ||
    text.includes("equipment")
  ) {
    reply =
      "Sure — I'll suggest a swap that hits the same muscle group with what you've got.";
    action = {
      type: "replace_exercise",
      summary: "Suggest an exercise substitution",
    };
  }

  return {
    id: id(),
    role: "assistant",
    content: reply,
    timestamp: new Date().toISOString(),
    action,
  };
}
