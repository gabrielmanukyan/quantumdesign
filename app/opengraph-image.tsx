import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Gabriel Manukyan — Senior Full-Stack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const inter400 = await readFile(
    join(process.cwd(), "assets/fonts/inter-400.ttf"),
  );
  const inter500 = await readFile(
    join(process.cwd(), "assets/fonts/inter-500.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#101112",
          color: "#eeefef",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#a0a4ad",
            letterSpacing: 0.4,
          }}
        >
          <span>Gabriel Manukyan</span>
          <span style={{ color: "#6d91ff" }}>quantumdesign.dev</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              letterSpacing: 2.8,
              textTransform: "uppercase",
              color: "#6d91ff",
              marginBottom: 28,
            }}
          >
            Independent mind. Product-focused engineer.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 500,
              letterSpacing: -2.8,
              lineHeight: 1.05,
            }}
          >
            Gabriel Manukyan.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#c5c9d2",
              marginTop: 22,
            }}
          >
            Senior Full-Stack Engineer · TypeScript &amp; AI products
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#a0a4ad",
          }}
        >
          Open to remote roles · Overlapping EU hours
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: inter400, weight: 400, style: "normal" },
        { name: "Inter", data: inter500, weight: 500, style: "normal" },
      ],
    },
  );
}
