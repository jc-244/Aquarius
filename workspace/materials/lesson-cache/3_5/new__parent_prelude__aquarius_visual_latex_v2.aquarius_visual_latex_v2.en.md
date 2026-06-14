%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6Indpa2lfcmVmZXJlbmNlIiwicmF0aW9uYWxlIjoiVGhpcyBzZWN0aW9uIGlzIG1vc3RseSBzeW1ib2xpYywgc28gdGhlIGNvcmUgdGVhY2hpbmcgc3VyZmFjZSBtdXN0IGJlIExhVGVYLW5hdGl2ZSBlcXVhdGlvbnMuIEEgY2xlYW4gV2lraXBlZGlhL1dpa2ltZWRpYSBkaWdpdGFsLWZpbHRlciBvciBkaWZmZXJlbmNlLWVxdWF0aW9uIGJsb2NrIGRpYWdyYW0gY2FuIHN0aWxsIGhlbHAgc3R1ZGVudHMgc2VlIHRoYXQgdGhlIGVxdWF0aW9uIGRlc2NyaWJlcyBhIHN5c3RlbSB3aG9zZSBwcmVzZW50L2Z1dHVyZSBvdXRwdXQgaXMgY29tcHV0ZWQgZnJvbSBpbnB1dCBzYW1wbGVzIGFuZCBlYXJsaWVyIG91dHB1dCBzYW1wbGVzLiBObyB0ZXh0Ym9vayBmaWd1cmUgaXMgYXZhaWxhYmxlIGZvciB0aGlzIHBhZ2UsIGFuZCBHUFRJbWFnZTIgaXMgdW5uZWNlc3NhcnkgYmVjYXVzZSB0aGUgbWFpbiBzdHJ1Y3R1cmVzIGFyZSBleGFjdCBlcXVhdGlvbnMuIiwiY3JhbSI6IlVzZSB0aGUgdmlzdWFsIHRvIHJlY29nbml6ZSBmZWVkYmFjayB0ZXJtcyB5Wy4uLl0gdmVyc3VzIGZlZWRmb3J3YXJkIGlucHV0IHRlcm1zIHhbLi4uXSBxdWlja2x5LiIsInN0YW5kYXJkIjoiVXNlIHRoZSB2aXN1YWwgYXMgYSBzdXBwb3J0IGZvciBvbmUgcmVwcmVzZW50YXRpdmUgcmVjdXJyZW5jZSBlcXVhdGlvbiBhbmQgY29ubmVjdCBlYWNoIGVxdWF0aW9uIHNpZGUgdG8gaW5wdXQvb3V0cHV0IHNhbXBsZSBtZW1vcnkuIiwidG9wX3Njb3JlIjoiVXNlIHRoZSB2aXN1YWwgYW5kIGVxdWF0aW9uIGNvbXBhcmlzb25zIHRvIGNhdGNoIGNhdXNhbGl0eSB0cmFwczogZnV0dXJlIGlucHV0IGRlcGVuZGVuY2UsIHdyb25nIG9yZGVyIHJlYWRpbmcsIGFuZCBjb25mdXNpbmcgYWR2YW5jZSBmb3JtIHdpdGggZGVsYXkgZm9ybS4ifQ==" style="display:none;"></div>%%KC_END%%
# 3.5 Discrete-Time System Equations

> **Section Objective:** Learn how LTID discrete-time systems are represented by linear constant-coefficient difference equations.

**Concepts In This Section**

- difference equation
- order
- normalization
- causality condition
- advance form
- delay form

## 1. General linear difference equation

Textbook equation **(3.14)**. This is the general linear constant-coefficient difference equation in **advance form**.

**Symbol guide:**

- \(y[n]\) — output samples; \(x[n]\) — input samples
- \(a_k\) — output-side coefficients; \(b_k\) — input-side coefficients
- \(N\) — largest advance index on the output side
- \(M\) — largest advance index on the input side
- \(n\) — discrete sample index

**Order** of the system is \(\max(N, M)\).

**When to use:** Whenever an exam asks for the general form, order, or classification of an LTID difference equation.

#### Common Misuse

Do not call the order \(N\) automatically. If \(M > N\), the order is \(M\), not \(N\).

$$y[n+N] + a_1y[n+N-1] + \cdots + a_{N-1}y[n+1] + a_Ny[n] = b_{N-M}x[n+M] + b_{N-M+1}x[n+M-1] + \cdots + b_{N-1}x[n+1] + b_Nx[n]$$

## 2. Causality in advance form

### CONCRETE EXAMPLE

If the largest output index is \(y[n+2]\) and the largest input index is \(x[n+3]\), the order is \(\max(2, 3) = 3\).

---

## Normalization

If the coefficient of the highest output term is not 1, divide the **entire equation** by that coefficient. After dividing, the leading output coefficient becomes \(a_0 = 1\). Every other coefficient — both output-side and input-side — must be divided by the same value. This is always valid as long as the leading coefficient is nonzero.

### EXAM TIP

Look first for the largest shift index on each side, then check whether the leading output coefficient is normalized to 1.


## 3. Delay form for causal systems

Textbook equation **(3.15)**. This is the general causal \(N\)th-order difference equation in advance form.

A causal discrete-time system **cannot require an input sample that occurs later than the output sample being computed.** In equation (3.14), the output being solved is \(y[n+N]\), which lives at time \(n+N\). Causality therefore requires that the latest input index satisfies \(M \le N\).

Equation (3.15) shows the **general causal case** with \(M = N\): the latest input is \(x[n+N]\), which is at the same time as the output \(y[n+N]\) — not beyond it.

**When to use:** Trigger this formula when an exam asks whether an advance-form system is causal.

#### Common Misuse

Seeing \(x[n+N]\) and calling it a future input is wrong. Relative to the output \(y[n+N]\), the input \(x[n+N]\) is **simultaneous**, not future.

$$y[n+N] + a_1y[n+N-1] + \cdots + a_{N-1}y[n+1] + a_Ny[n] = b_0x[n+N] + b_1x[n+N-1] + \cdots + b_{N-1}x[n+1] + b_Nx[n]$$

### NEAR-MISS CHECK

Compare two cases side by side:

| Equation | Causal? | Reason |
|---|---|---|
| \(y[n+2]\) depends on \(x[n+2]\) | Yes | Input and output occur at the same time \(n+2\) |
| \(y[n+2]\) depends on \(x[n+3]\) | No | Input is one sample **later** than the output |

> **Key rule:** Causality is judged relative to the output time being solved for, not relative to the symbol \(n\) alone.

### EXAM TIP

In advance form, compare \(M\) with \(N\): the system is causal if and only if \(M \le N\).

## 3. Delay form for causal systems

Textbook equation **(3.16)**. This is the general causal \(N\)th-order difference equation in **delay form**.

Delay form rewrites the causal advance-form equation so the **current output \(y[n]\)** is expressed using current and past input samples plus past output samples.

**Symbol guide:**

- \(x[n-k]\) — input sample \(k\) steps in the past
- \(y[n-k]\) — output sample \(k\) steps in the past

**When to use:** For computation, recursion, simulation, and hardware/software implementation, because the equation reads naturally from present and past samples — no future samples are needed.

#### Common Misuse

Do not change the coefficients while shifting the indices. The coefficients \(a_k\) and \(b_k\) stay paired with the same relative delay pattern after the index shift.

$$y[n] + a_1y[n-1] + \cdots + a_{N-1}y[n-N+1] + a_Ny[n-N] = b_0x[n] + b_1x[n-1] + \cdots + b_{N-1}x[n-N+1] + b_Nx[n-N]$$

### MINIMAL EXAMPLE — N = 2

For \(N = 2\), delay form has:

- **Output side:** \(y[n],\ y[n-1],\ y[n-2]\)
- **Input side:** \(x[n],\ x[n-1],\ x[n-2]\)

Delay form is obtained by **shifting the advance-form time index back by \(N\) samples** — that is, replacing \(n\) with \(n - N\) throughout. This is not the same as reversing the equation.

### TRAP

Do not treat \(y[n-2]\) as a future value just because it appears in the equation. In delay form, **negative shifts are past samples** — they are already stored values used to compute the current output \(y[n]\).

---
**📌 Key Takeaways**
- **General difference equation (3.14):** \(y[n+N] + a_1y[n+N-1] + \cdots + a_Ny[n] = b_{N-M}x[n+M] + \cdots + b_Nx[n]\); order is \(\max(N, M)\) — check both sides, not just the output side.
- **Normalization:** If the leading output coefficient is not 1, divide the entire equation by it so \(a_0 = 1\). Every coefficient on both sides must be divided by the same value.
- **Causality condition in advance form:** \(M \le N\); the general causal case is equation (3.15) where the latest input \(x[n+N]\) is simultaneous with the output \(y[n+N]\), not future relative to it.
- **Delay form (3.16):** \(y[n] + a_1y[n-1] + \cdots + a_Ny[n-N] = b_0x[n] + b_1x[n-1] + \cdots + b_Nx[n-N]\); obtained by shifting the advance-form index back by \(N\); coefficients are unchanged; used for computation and implementation.

*Next, these equations become tools for solving system responses.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6ImdlbmVyYWxfZGlmZmVyZW5jZV9lcXVhdGlvbl9vcmRlciIsImxhYmVsIjoiR2VuZXJhbCBkaWZmZXJlbmNlIGVxdWF0aW9uLCBvcmRlciwgYW5kIG5vcm1hbGl6YXRpb24iLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDFfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkEgZGlmZmVyZW5jZSBlcXVhdGlvbiBoYXMgaGlnaGVzdCBvdXRwdXQgdGVybSBcXCh5W24rMl1cXCkgYW5kIGhpZ2hlc3QgaW5wdXQgdGVybSBcXCh4W24rNV1cXCkuIFdoYXQgaXMgaXRzIG9yZGVyPyIsIm9wdGlvbnMiOlsiQS4gMiIsIkIuIDMiLCJDLiA1IiwiRC4gNyJdLCJjb3JyZWN0X29wdGlvbiI6IkMiLCJleHBsYW5hdGlvbiI6IkZvciB0aGUgZ2VuZXJhbCBlcXVhdGlvbiAoMy4xNCksIHRoZSBvcmRlciBpcyBcXChcXG1heChOLCBNKVxcKS4gSGVyZSBcXChcXG1heCgyLCA1KSA9IDVcXCkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhpcyB1c2VzIG9ubHkgdGhlIGxhcmdlc3Qgb3V0cHV0IGFkdmFuY2UgaW5kZXggXFwoTiA9IDJcXCkgYW5kIGlnbm9yZXMgdGhlIGlucHV0IHNpZGUuIiwiQiI6IlRoaXMgc3VidHJhY3RzIHRoZSBzaGlmdHMgXFwoNSAtIDIgPSAzXFwpLCBidXQgb3JkZXIgaXMgbm90IGZvdW5kIGJ5IHN1YnRyYWN0aW5nLiIsIkQiOiJUaGlzIGFkZHMgdGhlIHNoaWZ0cyBcXCgyICsgNSA9IDdcXCksIGJ1dCBvcmRlciBpcyBub3QgZm91bmQgYnkgYWRkaW5nLiJ9LCJoaW50IjoiVXNlIFxcKFxcbWF4KE4sIE0pXFwpLCBub3QganVzdCB0aGUgb3V0cHV0IHNpZGUuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6ImxhdGV4X2VxdWF0aW9uX2hpZ2hsaWdodCIsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwMV9xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiV2h5IGNhbiB0aGUgY29lZmZpY2llbnQgb2YgdGhlIGxlYWRpbmcgb3V0cHV0IHRlcm0gdXN1YWxseSBiZSBzZXQgdG8gMT8iLCJvcHRpb25zIjpbIkEuIEJlY2F1c2UgYWxsIGRpZmZlcmVuY2UgZXF1YXRpb25zIG5hdHVyYWxseSBoYXZlIGxlYWRpbmcgY29lZmZpY2llbnQgMSIsIkIuIEJlY2F1c2UgdGhlIHdob2xlIGVxdWF0aW9uIGNhbiBiZSBkaXZpZGVkIGJ5IHRoZSBub256ZXJvIGxlYWRpbmcgb3V0cHV0IGNvZWZmaWNpZW50IiwiQy4gQmVjYXVzZSBpbnB1dCBjb2VmZmljaWVudHMgZG8gbm90IGFmZmVjdCB0aGUgc3lzdGVtIiwiRC4gQmVjYXVzZSBjYXVzYWxpdHkgZm9yY2VzIHRoZSBsZWFkaW5nIGNvZWZmaWNpZW50IHRvIGJlIDEiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJJZiB0aGUgbGVhZGluZyBvdXRwdXQgY29lZmZpY2llbnQgaXMgbm9uemVybywgZGl2aWRpbmcgdGhlIGVudGlyZSBlcXVhdGlvbiBieSB0aGF0IGNvZWZmaWNpZW50IG5vcm1hbGl6ZXMgaXQgc28gXFwoYV8wID0gMVxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGUgY29lZmZpY2llbnQgbWF5IG5vdCBzdGFydCBhcyAxOyBpdCBpcyBtYWRlIDEgYnkgdGhlIG5vcm1hbGl6YXRpb24gc3RlcC4iLCJDIjoiSW5wdXQgY29lZmZpY2llbnRzIHN0aWxsIG1hdHRlciBhbmQgbXVzdCBhbHNvIGJlIGRpdmlkZWQgZHVyaW5nIG5vcm1hbGl6YXRpb24uIiwiRCI6IkNhdXNhbGl0eSBsaW1pdHMgaW5wdXQgdGltaW5nIHJlbGF0aXZlIHRvIG91dHB1dCB0aW1pbmc7IGl0IGRvZXMgbm90IHNldCBjb2VmZmljaWVudCB2YWx1ZXMuIn0sImhpbnQiOiJOb3JtYWxpemF0aW9uIGNoYW5nZXMgdGhlIHNjYWxlIG9mIGV2ZXJ5IGNvZWZmaWNpZW50IGVxdWFsbHkg4oCUIGJvdGggc2lkZXMgb2YgdGhlIGVxdWF0aW9uLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoiY2F1c2FsaXR5X2FkdmFuY2VfZm9ybSIsImxhYmVsIjoiQ2F1c2FsaXR5IGNvbmRpdGlvbiBpbiBhZHZhbmNlIGZvcm0iLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDJfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkluIGFkdmFuY2UgZm9ybSwgXFwoeVtuKzRdXFwpIGRlcGVuZHMgb24gXFwoeFtuKzZdXFwpLiBXaGF0IHNob3VsZCB5b3UgY29uY2x1ZGU/Iiwib3B0aW9ucyI6WyJBLiBUaGUgc3lzdGVtIGlzIGNhdXNhbCBiZWNhdXNlIGJvdGggdGVybXMgYXJlIGFkdmFuY2VkIGZyb20gXFwoblxcKSIsIkIuIFRoZSBzeXN0ZW0gaXMgY2F1c2FsIGJlY2F1c2UgNiBpcyBwb3NpdGl2ZSIsIkMuIFRoZSBzeXN0ZW0gaXMgbm9uY2F1c2FsIGJlY2F1c2UgdGhlIGlucHV0IHNhbXBsZSBpcyBsYXRlciB0aGFuIHRoZSBvdXRwdXQgc2FtcGxlIiwiRC4gVGhlIHN5c3RlbSBvcmRlciBtdXN0IGJlIDIiXSwiY29ycmVjdF9vcHRpb24iOiJDIiwiZXhwbGFuYXRpb24iOiJUaGUgb3V0cHV0IHRpbWUgaXMgXFwobis0XFwpLCBidXQgdGhlIGVxdWF0aW9uIHJlcXVpcmVzIGlucHV0IGF0IFxcKG4rNlxcKSwgd2hpY2ggaXMgdHdvIHNhbXBsZXMgbGF0ZXIuIFRoYXQgdmlvbGF0ZXMgY2F1c2FsaXR5IGJlY2F1c2UgXFwoTSA9IDYgPiBOID0gNFxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJDYXVzYWxpdHkgY29tcGFyZXMgdGhlIGlucHV0IHRpbWUgdG8gdGhlIG91dHB1dCB0aW1lLCBub3Qgd2hldGhlciBib3RoIGFyZSBhZHZhbmNlZCBmcm9tIFxcKG5cXCkuIiwiQiI6IkEgcG9zaXRpdmUgc2hpZnQgYWxvbmUgZG9lcyBub3QgZGV0ZXJtaW5lIGNhdXNhbGl0eTsgdGhlIGNvbXBhcmlzb24gaXMgXFwoTVxcKSB2cyBcXChOXFwpLiIsIkQiOiJPcmRlciBpcyBcXChcXG1heChOLCBNKSA9IFxcbWF4KDQsIDYpID0gNlxcKSwgbm90IHRoZSBkaWZmZXJlbmNlIFxcKDYgLSA0ID0gMlxcKS4ifSwiaGludCI6IkNvbXBhcmUgXFwoTVxcKSB3aXRoIFxcKE5cXCk6IGNhdXNhbCBhZHZhbmNlIGZvcm0gcmVxdWlyZXMgXFwoTSBcXGxlIE5cXCkuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6InRpbWVsaW5lX2NvbXBhcmlzb24iLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDJfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IldoaWNoIHN0YXRlbWVudCBjb3JyZWN0bHkgZXhwbGFpbnMgd2h5IFxcKHhbbitOXVxcKSBpcyBhbGxvd2VkIGluIHRoZSBjYXVzYWwgZXF1YXRpb24gKDMuMTUpPyIsIm9wdGlvbnMiOlsiQS4gXFwoeFtuK05dXFwpIGlzIGFsd2F5cyBhIHBhc3QgaW5wdXQiLCJCLiBcXCh4W24rTl1cXCkgb2NjdXJzIGF0IHRoZSBzYW1lIHRpbWUgYXMgdGhlIG91dHB1dCBcXCh5W24rTl1cXCkiLCJDLiBcXCh4W24rTl1cXCkgaXMgaWdub3JlZCB3aGVuIHNvbHZpbmcgdGhlIGVxdWF0aW9uIiwiRC4gQW55IFxcKHhcXCkgdGVybSBpcyBhdXRvbWF0aWNhbGx5IGNhdXNhbCJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IkZvciBlcXVhdGlvbiAoMy4xNSksIHRoZSBvdXRwdXQgYmVpbmcgc29sdmVkIGlzIFxcKHlbbitOXVxcKS4gVGhlIGlucHV0IFxcKHhbbitOXVxcKSBpcyBhdCB0aGUgc2FtZSBzYW1wbGUgdGltZSBcXChuK05cXCksIHNvIGl0IGlzIG5vdCBmdXR1cmUgaW5wdXQgcmVsYXRpdmUgdG8gdGhhdCBvdXRwdXQuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiXFwoeFtuK05dXFwpIGlzIG5vdCBwYXN0IHJlbGF0aXZlIHRvIFxcKHlbbitOXVxcKTsgaXQgaXMgc2ltdWx0YW5lb3VzLiIsIkMiOiJUaGUgdGVybSBpcyBwYXJ0IG9mIHRoZSBlcXVhdGlvbiBhbmQgZGlyZWN0bHkgYWZmZWN0cyB0aGUgb3V0cHV0IHZhbHVlLiIsIkQiOiJBbiBpbnB1dCB0ZXJtIHN1Y2ggYXMgXFwoeFtuK04rMV1cXCkgd291bGQgYmUgbGF0ZXIgdGhhbiB0aGUgb3V0cHV0IGFuZCB3b3VsZCBiZSBub25jYXVzYWwuIn0sImhpbnQiOiJKdWRnZSB0aW1pbmcgcmVsYXRpdmUgdG8gdGhlIG91dHB1dCBzYW1wbGUgXFwoeVtuK05dXFwpLCBub3QgcmVsYXRpdmUgdG8gXFwoblxcKSBhbG9uZS4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoid3JvbmdfdnNfcmlnaHRfdGltZWxpbmUiLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6ImRlbGF5X2Zvcm1faW50ZXJwcmV0YXRpb24iLCJsYWJlbCI6IkRlbGF5IGZvcm0gYW5kIGN1cnJlbnQtcGFzdCBzYW1wbGUgaW50ZXJwcmV0YXRpb24iLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoibWVkaXVtIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoxfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwM19xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiSW4gdGhlIGRlbGF5LWZvcm0gZXF1YXRpb24gKDMuMTYpLCB3aGF0IGRvZXMgXFwoeFtuLTJdXFwpIHJlcHJlc2VudD8iLCJvcHRpb25zIjpbIkEuIFRoZSBpbnB1dCB0d28gc2FtcGxlcyBpbiB0aGUgZnV0dXJlIiwiQi4gVGhlIGlucHV0IHR3byBzYW1wbGVzIGluIHRoZSBwYXN0IiwiQy4gVGhlIG91dHB1dCB0d28gc2FtcGxlcyBpbiB0aGUgcGFzdCIsIkQuIEEgY29lZmZpY2llbnQgbXVsdGlwbHlpbmcgXFwoeFtuXVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IkEgbmVnYXRpdmUgc2hpZnQgXFwoeFtuLTJdXFwpIG1lYW5zIHRoZSBpbnB1dCBzYW1wbGUgdHdvIHRpbWUgc3RlcHMgYmVmb3JlIFxcKG5cXCkuIEluIGRlbGF5IGZvcm0sIGFsbCBzaGlmdHMgYXJlIHplcm8gb3IgbmVnYXRpdmUsIG1lYW5pbmcgY3VycmVudCBvciBwYXN0IHNhbXBsZXMuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiRnV0dXJlIHNhbXBsZXMgd291bGQgdXNlIHBvc2l0aXZlIHNoaWZ0cyBzdWNoIGFzIFxcKHhbbisyXVxcKS4iLCJDIjoiVGhlIHN5bWJvbCBcXCh4XFwpIGRlbm90ZXMgaW5wdXQsIG5vdCBvdXRwdXQ7IG91dHB1dCBzYW1wbGVzIGFyZSB3cml0dGVuIFxcKHlbbi1rXVxcKS4iLCJEIjoiXFwoeFtuLTJdXFwpIGlzIGEgc2hpZnRlZCBpbnB1dCBzYW1wbGUsIG5vdCBhIHNjYWxhciBjb2VmZmljaWVudC4ifSwiaGludCI6IkluIGRlbGF5IGZvcm0sIG5lZ2F0aXZlIGluZGV4IHNoaWZ0cyBtZWFuIHN0b3JlZCBwYXN0IHNhbXBsZXMuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX0seyJpZCI6ImtwM19xMiIsInR5cGUiOiJzaG9ydF9hbnN3ZXIiLCJzdGVtIjoiQSBjbGFzc21hdGUgc2F5cyBjb252ZXJ0aW5nIGVxdWF0aW9uICgzLjE1KSBpbnRvIGRlbGF5IGZvcm0gbWVhbnMgcmV2ZXJzaW5nIHRoZSBvcmRlciBvZiB0aGUgY29lZmZpY2llbnRzLiBFeHBsYWluIHdoeSB0aGF0IGlzIHdyb25nLiIsImlkZWFsX2Fuc3dlciI6IkRlbGF5IGZvcm0gaXMgb2J0YWluZWQgYnkgc2hpZnRpbmcgdGhlIHRpbWUgaW5kZXggYmFjayBieSBcXChOXFwpIHNhbXBsZXMg4oCUIHJlcGxhY2luZyBcXChuXFwpIHdpdGggXFwobiAtIE5cXCkgdGhyb3VnaG91dCB0aGUgZXF1YXRpb24uIFRoaXMgdHVybnMgXFwoeVtuK05dXFwpIGludG8gXFwoeVtuXVxcKSwgXFwoeVtuK04tMV1cXCkgaW50byBcXCh5W24tMV1cXCksIGFuZCBzbyBvbi4gVGhlIGNvZWZmaWNpZW50cyBcXChhX2tcXCkgYW5kIFxcKGJfa1xcKSBzdGF5IGF0dGFjaGVkIHRvIHRoZWlyIGNvcnJlc3BvbmRpbmcgcmVsYXRpdmUgZGVsYXlzOyB0aGV5IGFyZSBub3QgcmV2ZXJzZWQgb3IgcmVvcmRlcmVkLiIsImdyYWRpbmdfcnVicmljIjpbIk11c3Qgc3RhdGUgdGhhdCBkZWxheSBmb3JtIGNvbWVzIGZyb20gYSB0aW1lLWluZGV4IHNoaWZ0IChyZXBsYWNpbmcgbiB3aXRoIG4tTikiLCJNdXN0IHN0YXRlIHRoYXQgY29lZmZpY2llbnRzIGFyZSBub3Qgc2ltcGx5IHJldmVyc2VkIiwiTXVzdCBtZW50aW9uIGN1cnJlbnQgYW5kIHBhc3Qgc2FtcGxlcywgc3VjaCBhcyB5W25dLCB5W24tMV0sIG9yIHhbbi0xXSJdLCJleHBsYW5hdGlvbiI6IlRoaXMgY2hlY2tzIHdoZXRoZXIgdGhlIHN0dWRlbnQgdW5kZXJzdGFuZHMgZGVsYXkgZm9ybSBzdHJ1Y3R1cmFsbHkg4oCUIGFzIGEgdW5pZm9ybSBpbmRleCBzaGlmdCDigJQgcmF0aGVyIHRoYW4gdHJlYXRpbmcgaXQgYXMgYSBtZW1vcml6ZWQgcmVhcnJhbmdlbWVudCBvZiB0ZXJtcy4iLCJoaW50IjoiQXNrIHdoYXQgaGFwcGVucyB0byBldmVyeSBpbmRleCBpZiB5b3UgcmVwbGFjZSBcXChuXFwpIHdpdGggXFwobiAtIE5cXCkgdGhyb3VnaG91dCBlcXVhdGlvbiAoMy4xNSkuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6ImFkdmFuY2VfdG9fZGVsYXlfZXF1YXRpb25fY29tcGFyaXNvbiIsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9XX1dfQ==" style="display:none;"></div>%%KC_END%%
