import { css } from "packages/panda-preset/styled-system/css";
import { Button } from "packages/panda-ui";

const buttonsCount = Array.from({ length: 5000 }, (_, i) => i + 1);

export default function Home() {
  return (
    <main className={css({ display: "flex", flexDirection: "column" })}>
      <h1
        className={css({
          mb: "6",
          textAlign: "center",
          fontSize: "4xl",
          fontWeight: "bold",
        })}
      >
        Panda Buttons
      </h1>
      <div
        className={css({
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "12",
        })}
      >
        {buttonsCount.map((i) => (
          <div key={i} className={css({ width: "12rem" })}>
            <Button>Panda Button {i}</Button>
          </div>
        ))}
      </div>
    </main>
  );
}
