
/**
 * Contains reusable components for general web development use.
 *
 * Handy when creating quick web pages with a lack of regard for specifics.
 * 
 *  
 */

// ------------------------------------------------------------ FUNCTIONS ------------------------------------------------------------

var Serialation = 0;

// increase targets scale
function scaleUp(event) {
    event.target.style.transform = 'scale(1.05)';
}

// decreases targets scale
function scaleDown(event) {
    event.target.style.transform = 'scale(1)';
}

function moveUp(event) {
    event.target.style.transform = 'translateY(-3px)';
}

function moveDown(event) {
    event.target.style.transform = 'translateY(0px)';
}

// creates a shimmer effect
function shimmer(event) {
    event.target.style.backgroundPositionX = '-150%';
}

// reverts the button to its original state
function normalize(event) {
    event.target.style.backgroundPositionX = '150%';
}

function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
  
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }
  
    document.body.removeChild(textArea);
  }

function copyToClipboard(text) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }
    navigator.clipboard.writeText(text).then(function() {
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  }

// ------------------------------------------------------------- COMPONENTS -------------------------------------------------------------

// features a component
export const ComponentDisplay = (props) => {
    
    const ComponentDisplay_style = {
        backgroundImage: 'linear-gradient(to right, #ffafbd, #ffc3a0)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'fit-content',
        paddingLeft: '5rem',
        paddingRight: '5rem',
        height: 'fit-content',
        border: '3px solid black',
        paddingTop: '2rem',
        transition: '0.5s ease',
        borderRadius: '5px',
        marginBottom: '1rem',
    }

    var columns = "";

    for (let i = 0; i < props.count; i++) {
        columns += '1fr ';
    }

    const ComponentDisplay_component_style = {
        fontFamily: 'monospace',
        display: 'grid',
        margin: '0 auto', 
        gridTemplateColumns: columns,
        gap: '10vw',
        paddingBottom: '2rem',
        paddingTop: '.8rem',
        transition: '0.5s ease',
        borderBottom: '3px solid black',
        marginBottom: '1rem',
    }

    const Code_style = {
        fontFamily: 'monospace',
        display: 'flex',
        flexDirection: 'column',
        width: 'fit-content',
        padding: '1rem',
        textAlign: 'center',
        transition: '0.5s ease',
    }

    const Copy_style = {
        fontWeight: 'bold',
    }

    return (
        <div style={ComponentDisplay_style} className={props.className}>
            <style>
                {`
                    .msn-component-display-div {
                        font-weight: bold;
                    }
                `}
            </style>
            <div style={ComponentDisplay_component_style}>
                {props.children}
            </div>
            <div style={Code_style}>
                <Button text="Copy JavaScript" hovertype="scale" className='msn-component-display-div' customClickEvent={()=>copyToClipboard(props.code)}/>
                <p></p>
            </div>
        </div>
    )
}

// Regular button
// props:
//
// className: class to add to the button, must be a CSS class name
// text: text to display
// loc: link to go to
// hovertype: 'scale', 'up', 'shimmer'
// customClickEvent: function to call when clicked
export const Button = (props) => {
    var button_style = {
        display: 'inline-block',
        width: 'fit-content',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
        borderRadius: '5px',
        paddingTop: '.5rem',
        paddingBottom: '.5rem',
        paddingLeft: '.7rem',
        paddingRight: '.7rem',
        textDecoration: 'none',
        color: 'black',
        backgroundColor: 'white',
        transition: '0.5s ease',
        userSelect: 'none',
        cursor: 'pointer'
    }

    if (props.hovertype === 'shimmer') {
        button_style['backgroundColor'] = 'hotpink';
        button_style['color'] = 'white';
        button_style['backgroundImage'] = 'linear-gradient(-60deg, transparent, transparent 40%, #ffffff44 40%, #ffffff44 60%, transparent 60%, transparent 100%)';
        button_style['backgroundSize'] = '200% 100%';
        button_style['backgroundRepeat'] = 'no-repeat';
        button_style['backgroundPositionX'] = '150%';
    }
    
    var Btn = ({ children , onMouseOver, onMouseLeave }) => ( 
        <a  
            href = { props.loc }
            className = { props.className }
            style = {button_style} 
            onMouseOver = { onMouseOver }
            onMouseLeave = { onMouseLeave }
            onClick = {  props.customClickEvent } 
            >
            { children } 
        </a>
    );

    switch (props.hovertype) {
        case 'scale':
            return <Btn onMouseOver={scaleUp} onMouseLeave={scaleDown}>{props.text}</Btn>;
        case 'up':
            return <Btn onMouseOver={moveUp} onMouseLeave={moveDown}>{props.text}</Btn>;
        case 'shimmer':
            return <Btn onMouseOver={shimmer} onMouseLeave={normalize}>{props.text}</Btn>;
    }
    return <Btn>{props.text}</Btn>;
}

// Basic navigation bar
// props:
//
// className: class to add to the button, must be a CSS class name
// title: title of the NavBar
// links: map of links to display {link: "location", ...}
// hovertype: 'down'
export const Navigation = (props) => {

    const Navigation_style = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 'fit-content',
        padding: '1rem',
        backgroundColor: 'lightgray',
        color: 'black',
        fontFamily: 'monospace',
        fontSize: '1.5rem',
        transition: '0.5s ease',
    }

    var Nav = ({ children }) => (
        <div 
            className={props.className}
            style={Navigation_style}
        >
            <h1>{props.title}</h1>
            
            {
                Object.keys(props.links).map((key) => {
                    return <Button key={key} text={key} loc={props.links[key]} hovertype="up"/>
                })
            }

        { children }
        </div>
    );
    return (
        <Nav></Nav>
    )
}