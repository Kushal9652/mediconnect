
const medicinesList = [
    { name: "Paracetamol", description: "Pain reliever and fever reducer." },
    { name: "Ibuprofen", description: "Nonsteroidal anti-inflammatory drug (NSAID)." },
    { name: "Amoxicillin", description: "Antibiotic for bacterial infections." },
    { name: "Cetirizine", description: "Antihistamine for allergies." },
    { name: "Metformin", description: "Used to treat type 2 diabetes." },
    { name: "Aspirin", description: "Pain reliever and blood thinner." },
    { name: "Omeprazole", description: "Reduces stomach acid." },
    { name: "Azithromycin", description: "Antibiotic for various infections." },
    { name: "Atorvastatin", description: "Lowers cholesterol." },
    { name: "Losartan", description: "Treats high blood pressure." },
    { name: "Levothyroxine", description: "Thyroid hormone replacement." },
    { name: "Amlodipine", description: "Treats high blood pressure and angina." },
    { name: "Simvastatin", description: "Lowers cholesterol." },
    { name: "Pantoprazole", description: "Reduces stomach acid." },
    { name: "Montelukast", description: "Treats allergies and asthma." },
    { name: "Doxycycline", description: "Antibiotic for infections." },
    { name: "Clopidogrel", description: "Prevents blood clots." },
    { name: "Salbutamol", description: "Relieves asthma symptoms." },
    { name: "Ranitidine", description: "Reduces stomach acid." },
    { name: "Gabapentin", description: "Treats nerve pain and seizures." },
    { name: "Ciprofloxacin", description: "Antibiotic for bacterial infections." },
    { name: "Hydrochlorothiazide", description: "Diuretic for high blood pressure." },
    { name: "Prednisolone", description: "Steroid for inflammation." },
    { name: "Tramadol", description: "Pain reliever." },
    { name: "Loratadine", description: "Antihistamine for allergies." },
    { name: "Diclofenac", description: "NSAID for pain and inflammation." },
    { name: "Furosemide", description: "Diuretic for fluid retention." },
    { name: "Metoprolol", description: "Treats high blood pressure." },
    { name: "Warfarin", description: "Blood thinner." },
    { name: "Insulin", description: "Controls blood sugar in diabetes." },
];

const Medicines = () => {
    return (
        <div>
            <div className="animate-fadeIn ml-4 md:ml-12 max-w-screen overflow-x-hidden flex flex-col items-center">
                <div className="text-xl md:text-2xl text-center mb-6 mt-4 md:mb-8 md:mt-5">Medicines</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
                    {medicinesList.map((medicine, idx) => (
                        <div
                            key={idx}
                            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-start hover:shadow-lg transition-shadow"
                        >
                            <div className="font-semibold text-lg mb-2">{medicine.name}</div>
                            <div className="text-gray-600 text-sm">{medicine.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Medicines
