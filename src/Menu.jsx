export default function Menu({onSelectVideo}) {

    function clickHandler(event) {
        const name = event.target.value;
        onSelectVideo(name)
    };

    return (
        <form onClick={clickHandler}>
            <input type='radio' name='src' value='fog'/> fog
            <input type='radio' name='src' value='flowers'/> flowers
            <input type='radio' name='src' value='beach'/> beach
            <input type='radio' name='src' value='meadow'/> meadow
        </form>
    );
};