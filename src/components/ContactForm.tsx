"use client";
import React, { useState } from "react";
import Button from "./Button";
import data from "./data.json";

interface FormState {
    [key: string]: string;
}

interface ContactFormProps {
    simple?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ simple = false }) => {
    const content = data.contact;
    const scriptURL = process.env.NEXT_PUBLIC_CONTACT_FORM_GOOGLE_SHEET_LINK;

    const [formData, setFormData] = useState(
        content.form.inputs.reduce((acc, field) => {
            acc[field] = "";
            return acc;
        }, {} as FormState)
    );
    const [isLoading, setLoading] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const formDataToString = (data: FormState): string => {
        return Object.keys(data)
            .map(
                (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const formDataStr = formDataToString(formData);
        console.log(formData);

        if (!scriptURL) {
            console.error("Error! scriptURL is not defined.");
            setSubmitError(
                "Form is not configured yet. Please set NEXT_PUBLIC_CONTACT_FORM_GOOGLE_SHEET_LINK in .env.local."
            );
            setLoading(false);
            return;
        }

        fetch(scriptURL, { method: "POST", body: formDataStr })
            .then(() => {
                setLoading(false);
                setSubmitError(null);
                alert("Thank you! Your form is submitted successfully.");
                setFormData(
                    content.form.inputs.reduce((acc, field) => {
                        acc[field] = "";
                        return acc;
                    }, {} as FormState)
                );
            })
            .catch((error) => {
                console.error("Error!", error.message);
                setSubmitError("Submission failed. Please try again later.");
                setLoading(false);
            });
    };

    // If simple mode is enabled, just return the form content
    if (simple) {
        return (
            <form onSubmit={handleSubmit} className="mt-2 w-full">
                <div className="flex flex-col gap-4">
                    {/* First two inputs (Name, Email) - stack vertically by default or maybe 2 col if space permits, user design shows 2 cols in card */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {content.form.inputs.slice(0, 2).map((field, index) => (
                            <div key={index} className="w-full">
                                <input
                                    className="text-16px-400 w-full text-[#0D1615] bg-[#f7f7f7] rounded-none border-b border-gray-300 px-3 py-3 focus:border-[#4d9fa8] outline-none placeholder:text-gray-400"
                                    type={field === "email" ? "email" : "text"}
                                    name={field}
                                    placeholder={field.toUpperCase()}
                                    id={field}
                                    value={formData[field]}
                                    onChange={handleInputChange}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Remaining inputs (Message) */}
                    {content.form.inputs.slice(2).map((field, index) => (
                        <div key={index + content.form.inputs.length} className="w-full">
                            <textarea
                                className={`text-16px-400 w-full text-[#0D1615] bg-[#f7f7f7] rounded xl px-3 py-3 outline-none border-none focus:ring-1 focus:ring-[#4d9fa8] bg-opacity-50 ${field === "message" && "h-32"}`}
                                name={field}
                                id={field}
                                placeholder={field.toUpperCase()}
                                value={formData[field]}
                                onChange={handleInputChange}
                            ></textarea>
                        </div>
                    ))}

                    <div className="mt-4">
                        <Button
                            text="Get in Touch"
                            type="primary"
                            btnAction="submit"
                            isLoading={isLoading}
                            classes="bg-[#aeb336] hover:bg-[#9ca130] text-white w-full md:w-auto px-8 py-3 rounded-none uppercase text-sm font-bold tracking-wider"
                        />
                    </div>
                </div>
                {submitError && (
                    <p className="mt-3 text-sm text-red-600">{submitError}</p>
                )}
            </form>
        );
    }

    // Default layout (if reused elsewhere or for backward compatibility)
    return (
        <section className="px-4 md:px-6 my-16">
            <div className="max-w-[1300px] mx-auto">
                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                        <span className="inline-flex items-center rounded-full bg-[#F1F1F1] text-[#0D1615] px-4 py-1.5 text-sm leading-[22px]">
                            {content.leadingText}
                        </span>
                        <h2 className="mt-3 font-sora text-[34px] sm:text-[48px] leading-[42px] sm:leading-14 font-semibold text-[#0D1615]">
                            {content.heading}
                        </h2>
                        <p className="mt-4 text-[16px] leading-7 text-[#606060] max-w-[520px]">
                            {content.body}
                        </p>
                    </div>

                    <div>
                        <h3 className="font-sora text-[22px] sm:text-[26px] font-semibold text-[#0D1615]">
                            {content.formHeading}
                        </h3>
                        <p className="mt-2 text-[15px] text-[#6B7280]">
                            {content.formBody}
                        </p>
                        {/* Recursive call with simple=true to render form */}
                        <ContactForm simple={true} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
