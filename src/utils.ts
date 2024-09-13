export function areStringsTruthy(
  ...inputs: (string | null | undefined)[]
): boolean {
  return inputs.every(
    (input) => typeof input === "string" && input.trim() !== ""
  );
}
