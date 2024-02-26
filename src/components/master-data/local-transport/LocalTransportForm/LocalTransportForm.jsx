import React from 'react';

const LocalTransportForm = () => {
    return (
        <div className="grid grid-cols-6 gap-4">
            <div className="col-span-6 sm:col-span-3">
                <label
                    htmlFor="place1"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    Place Name
                </label>
                <div className="mt-2">
                    <input
                        type="text"
                        name="place1"
                        id="place1"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>
        </div>
    );
};

export default LocalTransportForm;
