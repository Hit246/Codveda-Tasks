import Input from "./Input";

export default {
    title: "Components/Input",
    component: Input,
};

export const Text = () => <Input placeholder="Enter text..." />;
export const Password = () => <Input type="password" placeholder="Enter password..." />;
