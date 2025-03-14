import React from 'react'
import ModalsComponent from '../molecules/Modals'

type Props = {
    Open : boolean
    Close : () => void
}

const ModalsEdit = (props: Props) => {
  return (
    <ModalsComponent isOpen={props.Open} onClose={props.Close}>
  <div className="p-6">
    <h2 className="text-lg font-semibold text-gray-700 dark:text-white">Edit Employee</h2>
    <p className="text-gray-500 dark:text-gray-300 mb-4">Update the details of the employee below.</p>

    {/* Input Form */}
    <div className="space-y-3">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
        <input 
          type="text" 
          placeholder="Enter employee name" 
          className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Position</label>
        <input 
          type="text" 
          placeholder="Enter employee position" 
          className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
        />
      </div>
    </div>

    {/* Tombol Aksi */}
    <div className="flex justify-end mt-6 space-x-3">
      <button 
        onClick={props.Close}
        className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
      >
        Cancel
      </button>
      <button 
        onClick={() => alert("Saved!")} // Ganti dengan fungsi yang menyimpan data
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Save
      </button>
    </div>
  </div>
</ModalsComponent>
  )
}

export default ModalsEdit