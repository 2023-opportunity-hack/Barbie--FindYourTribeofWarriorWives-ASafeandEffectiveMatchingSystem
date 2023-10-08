import React, { useState } from 'react';
import { db } from './firebase';
import { getAuth } from 'firebase/auth';
import { collection } from 'firebase/firestore';
import { addDoc } from 'firebase/firestore';

const UserAttributes = () => {
    const [attributeName, setAttributeName] = useState('');
    const [attributeValue, setAttributeValue] = useState('');

    console.log(attributeName);
    console.log(attributeValue);

    const auth = getAuth();

    const handleAddAttribute = async () => {
        const user = auth.currentUser;

        if (!user) {
            console.error('User not authenticated.');
            return;
        }

        try {
            // Add user attribute to Firestore
            console.log(db);
            await addDoc(collection(db, 'userAttributes'), {
                userId: user.uid,
                attributeName: attributeValue,
            });

            // Clear input fields
            setAttributeName('');
            setAttributeValue('');

            console.log('Attribute added successfully.');
        } catch (error) {
            console.error('Error adding attribute:', error);
        }
    };

    return (
        <div>
            <h2>Create User Attribute</h2>
            <div>
                <input
                    type="text"
                    placeholder="Attribute Name"
                    value={attributeName}
                    onChange={(e) => setAttributeName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Attribute Value"
                    value={attributeValue}
                    onChange={(e) => setAttributeValue(e.target.value)}
                />
                <button onClick={handleAddAttribute}>Add Attribute</button>
            </div>
        </div>
    );
};

export default UserAttributes;