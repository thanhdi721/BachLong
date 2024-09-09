import React from 'react'

function ButtonTable() {
    return (
        <div>
            <p
                onClick={() => handleButtonProductClick(1)}
                style={{
                    backgroundColor: activeButtonProduct === 1 ? 'red' : 'white',
                    color: activeButtonProduct === 1 ? 'black' : 'black',
                    padding: '5px 10px',
                    width: '15%',

                    textAlign: 'center',
                    borderRadius: '20px',
                    fontSize: '20px',
                    fontWeight: '600',
                }}
            >
                Điện thoại
            </p>
        </div>
    )
}

export default ButtonTable