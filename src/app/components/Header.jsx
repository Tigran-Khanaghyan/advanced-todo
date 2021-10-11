import Button from "./Button";

export default function Header() {
    return (
        <div className='header'>
            Advanced Todo App
            <Button name='Log Out' className='btn-logOut'/>
        </div>
    )
}
