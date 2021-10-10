import Button from "../../components/Button";
import Input from "../../components/Input";

export default function SignIn() {
    return (
        <div className='signin-container'>
            <Input/>
            <Input/>
            <Button name="Sign In"/>
        </div>
    )
}