import React, { ButtonHTMLAttributes } from 'react';
import styles from './button.module.scss'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    // Define any additional props specific to your Button component
    // For example, you might want to define a prop for the button color
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
    return (
        <button className={styles.button} {...rest}>
            {children}
        </button >
    );
};

export default Button;
