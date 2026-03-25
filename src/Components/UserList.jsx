function UserList({ users }) {
  const activeUsers = users.filter((user) => user.isActive);

  if (activeUsers.length === 0) {
    return (
      <p className="rounded-xl bg-gray-100 p-3 text-sm text-gray-500">
        No active accounts found
      </p>
    );
  }

  return (
    <ul className="space-y-3">
      {activeUsers.map((user) => (
        <li
          key={user.id}
          className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition hover:shadow-md"
        >
          <span className="font-medium text-gray-800">
            {user.name}
          </span>

          <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
            Active
          </span>
        </li>
      ))}
    </ul>
  );
}

export default UserList;