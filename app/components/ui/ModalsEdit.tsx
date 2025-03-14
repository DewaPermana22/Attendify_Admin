import React, { useEffect, useState } from 'react';
import ModalsComponent from '../molecules/Modals';
import ButtonComponent from '../Atoms/Button';
import { useUserByID } from '@/app/server/Hooks/useUsers';
import { useRoles } from '@/app/server/Hooks/useRole';
import TextComponent from '../Atoms/Text';

type Props = {
    Open: boolean;
    Close: () => void;
    userID: number;
    
};

const ModalsEdit = (props : Props) => {
    const { data: userData, isLoading, error } = useUserByID(props.userID);
    const {data : roles, isLoading : isLoadingRoles, error : errorRoles} = useRoles();
    const [formData, setFormData] = useState({
        name: "",
        role: "",
    });


    useEffect(() => {
        if (userData) {
            setFormData({
                name: userData?.fullname || "", 
                role: userData?.role_id || String(userData?.role_id) || "", 
            });
        }
    }, [userData, props.userID]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (
        <ModalsComponent key={props.userID} isOpen={props.Open} onClose={props.Close}>
            <div className="p-6">
              <TextComponent type="subtitle" className="text-xl text-text dark:text-textDark" text="Edit Employee" />
              <TextComponent type="paragraph" className="text-text dark:text-textDark" text="Update the details of the employee below." />
                {/* Input Form */}
                <div className="space-y-3">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter employee name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Position</label>
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                        >
                          {roles?.map((role : any) => (
                            <option key={role.id} value={String(role.id)}>
                              {role.name}
                            </option>
                          ))}
                        </select>
                    </div>
                </div>

                {/* Tombol Aksi */}
                <div className="flex justify-end mt-6 space-x-3">
                    <ButtonComponent clicked={props.Close} color="Danger" text="Cancel" />
                    <ButtonComponent clicked={() => alert("Saved!")} color="Primary" text="Save" />
                </div>
            </div>
        </ModalsComponent>
    );
};

export default ModalsEdit;
