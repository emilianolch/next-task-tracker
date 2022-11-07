export async function postTask(task) {
  const res = await fetch("/api/tasks", {
    method: "POST",
    body: JSON.stringify({ task }),
  });
  return res.json();
}

export async function deleteTask(id) {
  const res = await fetch(`/api/tasks/${id}`, {
    method: "DELETE",
  });
  return res.json();
}
