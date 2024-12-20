import { Icon } from "@iconify/react/dist/iconify.js";

import "./style.min.css";

export const InputSearch = ({ postValue, name, disabled, ...rest }) => {
    return (
        <>
            <div className="busca">
                <span className="icon">
                    <Icon icon="mingcute:search-line" />
                </span>
                <input
                    type="text"
                    onChange={postValue}
                    name={name}
                    disabled={disabled}
                    {...rest}
                />
            </div>
        </>
    );
};

export const Button = ({ texto, click }) => {
    return (
        <>
            <button className="btnPadrao" onClick={click}>
                {texto}
            </button>
        </>
    );
};
