export async function postTask(task) {
  const res = await fetch("/api/tasks", {
    method: "POST",
    body: JSON.stringify({ task }),
  });
  return res.json();
}
