
export default function Header({ title}) {
    return (
        <header className={`bg-primary-1 h-[82px] flex justify-center w-[100%] items-center p-[21px] fixed z-50 top-0`}>
            <h1>{title}</h1>
        </header>
    );
}