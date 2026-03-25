import PropTypes from "prop-types";

function ProfileCard({ name = "Guest", age, role = "Member", isOnline }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
      
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">{name}</h2>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            isOnline
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-600"
          }`}
        >
          {isOnline ? "Online" : "Offline"}
        </span>
      </div>

      {/* Info */}
      <div className="space-y-2 text-sm text-gray-600">
        <p>
          <span className="font-medium text-gray-800">Age:</span> {age}
        </p>

        <p>
          <span className="font-medium text-gray-800">Role:</span> {role}
        </p>
      </div>

      {/* Button */}
      <button className="mt-5 w-full rounded-xl bg-gray-900 py-2 text-sm font-medium text-white transition hover:bg-gray-800">
        View Profile
      </button>
    </div>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  role: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default ProfileCard;