"use client"

import { useState } from "react"
import { MapPin, Calendar, Clock, Bed, Users, Minus, Plus, Search } from "lucide-react"

interface SearchFormProps {
  sectionType: "hotels" | "hostels"
}

export function SearchForm({ sectionType }: SearchFormProps) {
  const [location, setLocation] = useState("")
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [checkInTime, setCheckInTime] = useState("")
  const [checkOutTime, setCheckOutTime] = useState("")
  const [rooms, setRooms] = useState(1)
  const [guests, setGuests] = useState("1")
  const [bookingType, setBookingType] = useState<"day" | "hour">("day")
  const [months, setMonths] = useState(1)
  const [isFocused, setIsFocused] = useState(false);

  const incrementRooms = () => setRooms((prev) => prev + 1)
  const decrementRooms = () => setRooms((prev) => (prev > 1 ? prev - 1 : 1))
  const incrementMonths = () => setMonths((prev) => prev + 1)
  const decrementMonths = () => setMonths((prev) => (prev > 1 ? prev - 1 : 1))

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log("Search submitted")
  }

  return (
    <>
      <form
        onSubmit={handleSearch}
        className="bg-white rounded-xl shadow-lg p-2 flex flex-col md:flex-row md:flex-wrap items-stretch md:items-center"
      >
        {/* Location */}
        <div className="flex items-center flex-1 min-w-full md:min-w-[200px] p-2 border-b md:border-b-0 md:border-r border-gray-200">
  <MapPin className="text-gray-400 mr-2 flex-shrink-0" size={20} />
  <div className="relative flex flex-col flex-grow">
    <label
      htmlFor="location"
      className={`absolute text-xs font-medium transition-all duration-200 ${
        location || isFocused
          ? "text-gray-500 top-0 left-0"
          : "text-gray-400 top-1/2 left-2 transform -translate-y-1/2"
      }`}
    >
      Location
    </label>
    <input
      id="location"
      type="text"
      className="outline-none text-sm w-full pt-4"
      value={location}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onChange={(e) => setLocation(e.target.value)}
    />
  </div>
</div>


        {/* Check In */}
        <div className="flex items-center flex-1 min-w-full md:min-w-[150px] p-2 border-b md:border-b-0 md:border-r border-gray-200">
          <Calendar className="text-gray-400 mr-2 flex-shrink-0" size={20} />
          <div className="flex flex-col flex-grow">
            <label htmlFor="check-in" className="text-xs text-gray-500 font-medium">
              Check In
            </label>
            <input
              id="check-in"
              type="text"
              placeholder="Add Date"
              className="outline-none text-sm w-full"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              onFocus={(e) => ((e.target as HTMLInputElement).type = "date")}
              onBlur={(e) => ((e.target as HTMLInputElement).type = "text")}
            />
          </div>
        </div>

        {sectionType === "hotels" ? (
          <>
            {bookingType === "hour" ? (
              <div className="flex items-center flex-1 min-w-full md:min-w-[150px] p-2 border-b md:border-b-0 md:border-r border-gray-200">
                <Clock className="text-gray-400 mr-2 flex-shrink-0" size={20} />
                <div className="flex flex-col flex-grow">
                  <label htmlFor="check-in-time" className="text-xs text-gray-500 font-medium">
                    Check In Time
                  </label>
                  <input
                    id="check-in-time"
                    type="time"
                    className="outline-none text-sm w-full"
                    value={checkInTime}
                    onChange={(e) => setCheckInTime(e.target.value)}
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center flex-1 min-w-full md:min-w-[150px] p-2 border-b md:border-b-0 md:border-r border-gray-200">
                <Calendar className="text-gray-400 mr-2 flex-shrink-0" size={20} />
                <div className="flex flex-col flex-grow">
                  <label htmlFor="check-out" className="text-xs text-gray-500 font-medium">
                    Check Out
                  </label>
                  <input
                    id="check-out"
                    type="text"
                    placeholder="Add Date"
                    className="outline-none text-sm w-full"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    onFocus={(e) => ((e.target as HTMLInputElement).type = "date")}
                    onBlur={(e) => ((e.target as HTMLInputElement).type = "text")}
                  />
                </div>
              </div>
            )}

            {bookingType === "hour" && (
              <div className="flex items-center flex-1 min-w-full md:min-w-[150px] p-2 border-b md:border-b-0 md:border-r border-gray-200">
                <Clock className="text-gray-400 mr-2 flex-shrink-0" size={20} />
                <div className="flex flex-col flex-grow">
                  <label htmlFor="check-out-time" className="text-xs text-gray-500 font-medium">
                    Check Out Time
                  </label>
                  <input
                    id="check-out-time"
                    type="time"
                    className="outline-none text-sm w-full"
                    value={checkOutTime}
                    onChange={(e) => setCheckOutTime(e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* Room */}
            <div className="flex items-center flex-1 min-w-full md:min-w-[120px] p-2 border-b md:border-b-0 md:border-r border-gray-200">
              <Bed className="text-gray-400 mr-2 flex-shrink-0" size={20} />
              <div className="flex flex-col flex-grow">
                <label className="text-xs text-gray-500 font-medium">Room</label>
                <div className="flex items-center">
                  <button
                    type="button"
                    className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center"
                    onClick={decrementRooms}
                  >
                    <Minus size={14} />
                  </button>
                  <span className="mx-2 text-sm">{rooms}</span>
                  <button
                    type="button"
                    className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center"
                    onClick={incrementRooms}
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          // Hostel-specific fields
          <div className="flex items-center flex-1 min-w-full md:min-w-[150px] p-2 border-b md:border-b-0 md:border-r border-gray-200">
            <Calendar className="text-gray-400 mr-2 flex-shrink-0" size={20} />
            <div className="flex flex-col flex-grow">
              <label className="text-xs text-gray-500 font-medium">Months</label>
              <div className="flex items-center">
                <button
                  type="button"
                  className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center"
                  onClick={decrementMonths}
                >
                  <Minus size={14} />
                </button>
                <span className="mx-2 text-sm">{months}</span>
                <button
                  type="button"
                  className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center"
                  onClick={incrementMonths}
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Guests */}
        <div className="flex items-center flex-1 min-w-full md:min-w-[120px] p-2 border-b md:border-b-0 md:border-r border-gray-200">
          <Users className="text-gray-400 mr-2 flex-shrink-0" size={20} />
          <div className="flex flex-col flex-grow">
            <label className="text-xs text-gray-500 font-medium">Guests</label>
            <div className="flex items-center">
              <button
                type="button"
                className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center"
                onClick={() => setGuests((prev) => (Number(prev) > 1 ? String(Number(prev) - 1) : "1"))}
              >
                <Minus size={14} />
              </button>
              <span className="mx-2 text-sm">{guests}</span>
              <button
                type="button"
                className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center"
                onClick={() => setGuests((prev) => String(Number(prev) + 1))}
              >
                <Plus size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Search Button */}
        <div className="flex-none p-2 w-full md:w-auto">
          <button
            type="submit"
            className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors w-full md:w-auto"
          >
            <span className="md:hidden">
              Search {sectionType === "hotels" ? "Hotel" : "Hostel"}
            </span>
            <Search size={20} className="hidden md:block" />
          </button>
        </div>
      </form>

      {/* Booking Type Toggle (only for hotels) */}
      {sectionType === "hotels" && (
        <div className="mt-4 flex justify-center">
          <div className="bg-white rounded-full p-1 inline-flex shadow-md">
            <button
              type="button"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                bookingType === "day" ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setBookingType("day")}
            >
              Book by Day
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                bookingType === "hour" ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setBookingType("hour")}
            >
              Book by Hour
            </button>
          </div>
        </div>
      )}
    </>
  )
} 