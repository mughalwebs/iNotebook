import React from 'react'

export default function About() {
    return (
        <>
            <div className="container my-3">
                <h1 className="mb-4 remove-typing-cursor">About iNotebook</h1>
                <div className="accordion remove-typing-cursor" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Features
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <b>1. Cloud Storage:</b> Seamlessly save notes to the cloud for accessibility from any device with an internet connection.
                                <br />
                                <b>2. End-to-End Encryption:</b> Utilizes robust encryption protocols to ensure the security and privacy of your notes during storage and transmission.
                                <br />
                                <b>3. Cross-Platform Compatibility:</b> Access your notes on various devices, including smartphones, tablets, and desktop computers, regardless of the operating system.
                                <br />
                                <b>4. Real-Time Syncing:</b> Changes made to your notes are instantly synchronized across all your devices, ensuring you always have the latest version.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                About iNotebook
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <li>
                                    iNotebook is a cutting-edge note-taking application designed to streamline your productivity and ensure the security of your notes. Built with React technology, it offers a sleek and intuitive user interface coupled with powerful features to enhance your note-taking experience.
                                </li>
                                <li>
                                    Whether you're a student, professional, or anyone in need of organizing thoughts and tasks, iNotebook provides a versatile platform to capture, organize, and access your notes anytime, anywhere. With its cloud-based storage and robust security measures, you can trust that your valuable information is kept safe and accessible whenever you need it.
                                </li>
                                <li>
                                    For any inquiries, suggestions, or support, please don't hesitate to reach out to us at <code>itmughal2023@gmail.com</code>. We're here to assist you and ensure you have the best possible experience with iNotebook.
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Contact Us
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                For inquiries, feedback, or support, please contact us at <code>itmughal2023@gmail.com</code>. We value your feedback and are committed to providing the best possible experience with our iNotebook app.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}