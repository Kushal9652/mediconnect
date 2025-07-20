const API_BASE_URL = 'http://localhost:2800'; // Updated to match backend port

export async function createAppointment(data, token) {
  const res = await fetch(`${API_BASE_URL}/api/appointments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: JSON.stringify(data)
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Failed to create appointment');
  }
  return res.json();
}

export default API_BASE_URL;
