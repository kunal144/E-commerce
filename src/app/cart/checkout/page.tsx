import Link from 'next/link'

export default function page() {
  return (
    <div className="mt-4 flex flex-col bg-gray-100 rounded-lg p-4 shadow-sm">
      <h2 className="text-black font-bold text-lg">Shipping Address</h2>

      <div className="mt-4">
        <label className="text-black" htmlFor="name">
          Name
        </label>
        <input
          placeholder="Your name"
          className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
          type="text"
        />
      </div>

      <div className="mt-4">
        <label className="text-black" htmlFor="address">
          Address
        </label>
        <textarea
          placeholder="Your address"
          className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
          id="address"
        ></textarea>
      </div>

      <div className="mt-4 flex flex-row space-x-2">
        <div className="flex-1">
          <label className="text-black" htmlFor="city">
            City
          </label>
          <input
            placeholder="Your city"
            className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
            id="city"
            type="text"
          />
        </div>

        <div className="flex-1">
          <label className="text-black" htmlFor="state">
            State
          </label>
          <input
            placeholder="Your state"
            className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
            id="state"
            type="text"
          />
        </div>
      </div>

      <div className="mt-4 flex flex-row space-x-2">
        <div className="flex-1">
          <label className="text-black" htmlFor="zip">
            ZIP
          </label>
          <input
            placeholder="Your ZIP code"
            className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
            id="zip"
            type="text"
          />
        </div>

        <div className="flex-1">
          <label className="text-black" htmlFor="country">
            Country
          </label>
          <select
            className="w-full bg-white rounded-md border-gray-300 text-black px-2 py-1"
            id="country"
          >
            <option value="">Select a country</option>
            <optgroup label="Africa">
              <option value="AF">Afghanistan</option>
              <option value="DZ">Algeria</option>
              <option value="AO">Angola</option>
              ...
              <option value="ZW">Zimbabwe</option>
            </optgroup>
            <optgroup label="Asia">
              <option value="AM">Armenia</option>
              <option value="AZ">Azerbaijan</option>
              <option value="BH">Bahrain</option>
              ...
              <option value="YE">Yemen</option>
            </optgroup>
            <optgroup label="South America">
              <option value="AR">Argentina</option>
              <option value="BO">Bolivia</option>
              <option value="BR">Brazil</option>
              ...
              <option value="VE">Venezuela</option>
            </optgroup>
            ...
          </select>
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <button
          className="bg-white text-black rounded-md px-4 py-1 hover:bg-gray-200 hover:text-gray-900"
          type="submit"
        >
          <Link href={'/cart/checkout/payment'}>Submit</Link>
        </button>
      </div>
    </div>
  )
}
