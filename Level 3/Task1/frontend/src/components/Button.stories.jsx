import Button from "./Button";

export default {
    title: "Components/Button",
    component: Button,
};

export const Primary = () => <Button label="Primary Button" />;
export const Danger = () => <Button label="Delete" className="bg-red-600 hover:bg-red-700" />;
