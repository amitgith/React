import React from "react";
import { Mail, Phone, User, MapPin, Home, Hash } from "lucide-react";

const UserCard = ({ user }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Header */}
      <div className="bg-linear-to-r from-indigo-600 to-purple-600 p-6 text-center">
        <div className="w-20 h-20 mx-auto rounded-full bg-white flex items-center justify-center text-indigo-600 font-bold text-3xl shadow-lg">
          {user.name.firstname.charAt(0).toUpperCase()}
        </div>

        <h2 className="mt-4 text-2xl font-bold text-white capitalize">
          {user.name.firstname} {user.name.lastname}
        </h2>

        <p className="text-indigo-100">@{user.username}</p>
      </div>

      {/* Body */}
      <div className="p-6 space-y-5">
        <div className="flex items-center gap-3">
          <Mail className="text-indigo-600" size={20} />
          <div>
            <p className="text-xs text-gray-500">Email</p>
            <p className="font-medium">{user.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="text-green-600" size={20} />
          <div>
            <p className="text-xs text-gray-500">Phone</p>
            <p className="font-medium">{user.phone}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <User className="text-orange-500" size={20} />
          <div>
            <p className="text-xs text-gray-500">Username</p>
            <p className="font-medium">@{user.username}</p>
          </div>
        </div>

        <div className="border-t pt-5">
          <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
            <MapPin className="text-red-500" size={20} />
            Address
          </h3>

          <div className="space-y-2 text-gray-700">
            <p className="flex items-center gap-2">
              <Home size={18} className="text-blue-500" />
              {user.address.number}, {user.address.street}
            </p>

            <p className="flex items-center gap-2">
              <MapPin size={18} className="text-purple-500" />
              {user.address.city}
            </p>

            <p className="flex items-center gap-2">
              <Hash size={18} className="text-pink-500" />
              {user.address.zipcode}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
