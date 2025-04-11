import { supabase } from './src/lib/supabase'; // Corrected the relative path

interface UpdatedData {
    name?: string;
    updatedDate?: string;
    // Add other fields as per your schema
}

async function handleProgressUpdate(studentId: string, updatedData: UpdatedData) {
    try {
        const { data, error } = await supabase
            .from('students') // Ensure this matches your table name
            .update(updatedData) // Pass the updated data
            .eq('id', studentId)
            .select(); // Add select to get the updated data

        if (error) {
            console.error('Error updating progress:', error.message);
            return;
        }

        if (!data || (Array.isArray(data) && data.length === 0)) {
            console.warn('No rows updated. Check if the student ID exists.');
            return;
        }

        console.log('Progress updated successfully:', data);
    } catch (err) {
        console.error('Unexpected error updating progress:', err);
    }
}

// Example usage
handleProgressUpdate('0fe4aa47-858c-4603-b75f-13c5b28daa48', {
    name: 'Siddhi',
    updatedDate: new Date().toISOString(), // Ensure this column exists in your schema
});
