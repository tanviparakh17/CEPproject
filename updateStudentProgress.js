import { supabase } from './src/lib/supabaseClient';

async function updateStudentProgress(studentName, subject, marks) {
    // Check if the student exists
    const { data: student, error: fetchError } = await supabase
        .from('students')
        .select('*')
        .eq('name', studentName)
        .single();

    if (fetchError || !student) {
        console.error('Student does not exist. Add the student first.');
        return 'Student does not exist. Add the student first.';
    }

    // Update the marks for the existing student
    const { error: updateError } = await supabase
        .from('students')
        .update({ [subject]: marks })
        .eq('name', studentName);

    if (updateError) {
        console.error('Error updating student progress:', updateError.message);
        return 'Error updating student progress.';
    }

    console.log('Student progress updated successfully.');
    return 'Student progress updated successfully.';
}

// Example usage
updateStudentProgress('John Doe', 'math', 85)
    .then(console.log)
    .catch(console.error);
