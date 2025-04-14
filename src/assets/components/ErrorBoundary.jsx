import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error('Error en el componente:', error);
        console.info('Información adicional:', info);
    }

    render() {
        if (this.state.hasError) {
            return <div className="error-message">Ha ocurrido un error al cargar la galería.</div>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
