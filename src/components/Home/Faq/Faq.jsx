

const Faq = () => {
    return (
        <div className="my-[200px] container mx-auto text-xl">
            <div>
                <h1 className="text-4xl  font-bold text-center mb-10">Frequently Asked Question</h1>
            </div>
            <div className="collapse  collapse-plus ">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title  text-2xl font-bold">
                    How can I access assignments on StudyHub?
                </div>
                <div className="collapse-content">
                    <p>Simply visit our website and browse through the available categories or use the search feature to find assignments relevant to your subject or topic of interest. You can then view or download the assignments as needed.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-plus  ">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-2xl font-bold">
                    Can I contribute my own assignments to StudyHub?
                </div>
                <div className="collapse-content">
                    <p>Yes! We encourage students to share their assignments with the StudyHub community. Simply create an account, navigate to the Contribute section, and follow the instructions to upload your assignments. Your contributions help enrich the learning experience for others.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-plus  ">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-2xl font-bold">
                    Are the assignments on StudyHub free to access?
                </div>
                <div className="collapse-content">
                    <p>Yes, all assignments on StudyHub are freely accessible to registered users. Simply sign up for an account to start exploring our collection of assignments and resources.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-plus  ">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-2xl font-bold">
                    How often are new assignments added to StudyHub?                </div>
                <div className="collapse-content">
                    <p>We strive to regularly update our database with new assignments across various subjects and topics. While the frequency may vary, we aim to provide fresh content to our users on a consistent basis.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Faq;