import styles from "./styles.module.css";

const Container = ({styleProps, children}) => {
  let style = {};
  if (styleProps) {
    style = styleProps;
  }
  return (
    <div style={style} className={styles.container}>
      {children}
    </div>
  );
};

export default Container;
