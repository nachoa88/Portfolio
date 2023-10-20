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
    {
        code: 'cat',
        name: 'Català',
        countryCode: 'cat'
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
                            {code === 'cat' ? (
                                <img src="img/icons/cat_flag_icon.png" alt="Català" style={{ width: '19px', height: '14.5px' }} />
                            ) : (
                                <span className={`fi fi-${countryCode}`}></span>
                            )}
                            <span style={{ marginLeft: '5px' }}>{name}</span>
                        </Dropdown.Item>
                    </li>
                )
                )}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default LanguageToggle;