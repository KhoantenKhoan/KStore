import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Nếu có lỗi, set state hasError thành true
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Ghi log lỗi hoặc gửi thông báo lỗi đến một service bên ngoài để xử lý
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Hiển thị thông báo lỗi hoặc fallback UI
      return <h1>Oops! Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
