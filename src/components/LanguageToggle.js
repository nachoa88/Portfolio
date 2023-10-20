import i18next from "i18next";
import Dropdown from 'react-bootstrap/Dropdown';
import "/node_modules/flag-icons/css/flag-icons.min.css";


// This are the languages saved in an array that we're going to use in the dropdown.
const languages = [
    {
        code: 'en',
        name: 'English',
        countryCode: 'gb'
    },
    {
        code: 'es',
        name: 'Español',
        countryCode: 'es'
    },
]

function LanguageToggle() {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                <span className="bi bi-globe2"></span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {languages.map(({ code, name, countryCode }) => (
                    <li key={countryCode}>
                        <Dropdown.Item onClick={() => i18next.changeLanguage(code)}>
                            <span className={`fi fi-${countryCode}`}></span>
                            {name}
                        </Dropdown.Item>
                    </li>
                )
                )}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default LanguageToggle;

{/* 
<div className="dropdown">
                <span className="bi bi-globe2 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></span>

                <ul className="dropdown-menu">
                    {languages.map(({ code, name, countryCode }) => (
                        <li key={countryCode}>
                            <button className="dropdown-item" onClick={() => i18next.changeLanguage(code)}>
                                <span className={`fi fi-${countryCode}`}></span>{name}
                            </button>
                        </li>
                    )
                    )}
                </ul>
            </div>
*/}


