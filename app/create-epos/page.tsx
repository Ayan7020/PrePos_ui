import { CreateWorkspaceForm } from "@/features/workspace/components/CreateWorkspaceForm";

const CreateEposPage = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <CreateWorkspaceForm />
            </div>
        </div>
    );
}

export default CreateEposPage;