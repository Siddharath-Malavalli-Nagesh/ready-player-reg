import { db } from './firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import { FormData, FirestoreFormData } from '../components/RegistrationForm';

export const saveRegistrationData = async (formData: FormData): Promise<void> => {
  try {
    // Transform form data to match Firestore structure
    const firestoreData: FirestoreFormData = {
      "Full Name": formData.name,
      "Email Address": formData.email,
      "University / College Name": formData.university,
      "Team Name": formData.teamName,
      "Team Size": parseInt(formData.teamSize)
    };

    // Add team member data based on team size
    const teamSize = parseInt(formData.teamSize);
    
    if (teamSize >= 2 && formData.teamMembers[0]) {
      firestoreData["Member 2 Name"] = formData.teamMembers[0].name;
      firestoreData["Member 2 Email"] = formData.teamMembers[0].email || "";
    }
    
    if (teamSize >= 3 && formData.teamMembers[1]) {
      firestoreData["Member 3 Name"] = formData.teamMembers[1].name;
      firestoreData["Member 3 Email"] = formData.teamMembers[1].email || "";
    }
    
    if (teamSize >= 4 && formData.teamMembers[2]) {
      firestoreData["Member 4 Name"] = formData.teamMembers[2].name;
      firestoreData["Member 4 Email"] = formData.teamMembers[2].university;
    }

    // Add document to Firestore
    const docRef = await addDoc(collection(db, "ReadyPlayerOne"), firestoreData);
    console.log("Document written with ID: ", docRef.id);
    
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
};
