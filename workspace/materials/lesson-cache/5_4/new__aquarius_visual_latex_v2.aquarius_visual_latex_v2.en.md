%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6Indpa2lfcmVmZXJlbmNlIiwicmF0aW9uYWxlIjoiU3lzdGVtIHJlYWxpemF0aW9uIGlzIG1haW5seSBhYm91dCByZWNvZ25pemluZyBob3cgYWxnZWJyYWljIHRyYW5zZmVyLWZ1bmN0aW9uIGNvZWZmaWNpZW50cyBiZWNvbWUgYmxvY2stZGlhZ3JhbSBjb21wb25lbnRzOiBkZWxheXMsIG11bHRpcGxpZXJzLCBhZGRlcnMsIGZlZWRmb3J3YXJkIHRhcHMsIGFuZCBmZWVkYmFjayB0YXBzLiBTdGF0aWMgZGlyZWN0LWZvcm0gZGlnaXRhbC1maWx0ZXIgZGlhZ3JhbXMgZnJvbSBXaWtpcGVkaWEgb3IgV2lraW1lZGlhIGFyZSB0aGUgYmVzdCBmaXJzdCB2aXN1YWwgY2hvaWNlIGJlY2F1c2UgdGhleSBhcmUgY2Fub25pY2FsLCBjbGVhbiwgYW5kIGV4YW0tcmVjb2duaXphYmxlLiBObyBnZW5lcmF0ZWQgaW1hZ2UgaXMgbmVlZGVkIHVubGVzcyBubyBzdWl0YWJsZSBwdWJsaWMgZGlyZWN0LWZvcm0gZGlhZ3JhbSBjYW4gYmUgZm91bmQuIiwiY3JhbSI6IlVzZSB2aXN1YWxzIHRvIGlkZW50aWZ5IGRpcmVjdC1mb3JtIHN0cnVjdHVyZXMgYW5kIGNvZWZmaWNpZW50IHBsYWNlbWVudCBxdWlja2x5LiIsInN0YW5kYXJkIjoiVXNlIHZpc3VhbHMgdG8gY29ubmVjdCBlYWNoIHRlcm0gaW4gdGhlIHRyYW5zZmVyIGZ1bmN0aW9uIHRvIGRlbGF5cywgbXVsdGlwbGllcnMsIGFuZCBzdW1taW5nIG5vZGVzLiIsInRvcF9zY29yZSI6IlVzZSB2aXN1YWxzIHRvIGNhdGNoIHN1YnRsZSB0cmFwczogcmV2ZXJzZWQgY29lZmZpY2llbnQgb3JkZXIsIG1pc3NpbmcgZGVub21pbmF0b3IgZmVlZGJhY2sgdGVybXMsIGFuZCB3cm9uZyBmZWVkYmFjayBzaWducy4ifQ==" style="display:none;"></div>%%KC_END%%
# 5.4 System Realization

> **Section Objective:** Learn how a transfer function \(H[z]\) becomes an implementable discrete-time system made from delays, multipliers, and adders.

---

**Concepts In This Section**

- Rational transfer function form
- Direct-form realization
- Difference equation
- Cascade connection
- Parallel connection

## 1. The transfer function is the realization blueprint

Equation (5.29) is the standard rational form used to build a realizable LTID discrete-time system. Every symbol has a direct physical role:

- **\(N\)** — the system order; it tells you how many unit-delay stages the realization will need.
- **\(b_0, b_1, \ldots, b_N\)** — numerator (feedforward) coefficients; they multiply delayed input samples.
- **\(a_1, a_2, \ldots, a_N\)** — denominator (feedback) coefficients; the leading denominator coefficient is normalized to 1.

**When to use it:** any time an exam asks you to realize, draw, or implement \(H[z]\).

**Minimal example:** for \(N = 2\), expect two unit-delay stages in the block diagram.

#### COMMON MISUSE
Students often read coefficients left-to-right as time order without checking the powers of \(z\). Always match \(b_k\) to \(z^{N-k}\), not to position in the written expression.

$$H[z]=\frac{b_0z^N+b_1z^{N-1}+\cdots+b_{N-1}z+b_N}{z^N+a_1z^{N-1}+\cdots+a_{N-1}z+a_N}$$


## 2. Convert H[z] into the difference equation

Realization means turning \(H[z] = Y[z]/X[z]\) into an input-output recursion you can compute sample by sample.

**Symbol roles:**
- \(x[n]\) — input signal; \(x[n-k]\) is the input delayed by \(k\) samples.
- \(y[n]\) — output signal; \(y[n-k]\) is the output delayed by \(k\) samples.
- \(b_k\) — feedforward coefficients multiplying delayed inputs.
- \(a_k\) — denominator coefficients tied to delayed outputs.

**Exam trigger:** if the prompt asks for a direct-form realization, write this equation first, then draw delays and multipliers.

#### SOLVED-FORM WARNING
If you isolate \(y[n]\), the \(a\)-terms move to the right side and **change sign**:

$$y[n] = b_0x[n] + b_1x[n-1] + \cdots + b_Nx[n-N] - a_1y[n-1] - \cdots - a_Ny[n-N]$$

#### COMMON MISUSE
Placing \(a_k\) coefficients on input branches, or forgetting the sign change when solving for \(y[n]\).

$$y[n]+a_1y[n-1]+\cdots+a_Ny[n-N]=b_0x[n]+b_1x[n-1]+\cdots+b_Nx[n-N]$$

## 3. Direct-form realization: what to draw

Follow this step-by-step drawing recipe:

**Step 1:** Normalize the denominator so the leading coefficient is 1. If it is not already 1, divide numerator and denominator by the leading coefficient.

**Step 2:** Count the order \(N\). Draw \(N\) unit delays in a chain.

**Step 3:** Attach \(b\)-coefficients to the delayed input paths (feedforward taps). \(b_0\) multiplies \(x[n]\), \(b_1\) multiplies \(x[n-1]\), and so on.

**Step 4:** Attach \(a\)-coefficients to the delayed output feedback paths. If you are drawing from the solved recursion for \(y[n]\), these multipliers carry **negative signs**.

---

**Minimal concrete example:**

For \(H[z] = \dfrac{2z+3}{z+0.4}\), the order is \(N = 1\), so **one delay** is needed. Read off: \(b_0 = 2\), \(b_1 = 3\), \(a_1 = 0.4\). The single delay feeds both the \(b_1\) input tap and the \(-a_1\) feedback tap.

---

### EXAM TIP
Coefficient order follows **descending powers of \(z\)**, not the order in which numbers appear after algebraic rearrangement. Always rewrite \(H[z]\) in standard form before reading off coefficients.


## 4. Cascade connection

Cascade means the output of the first subsystem becomes the input of the second subsystem — the signal travels through them **one after another** in a single path.

- \(H_1[z]\) — transfer function of the first block.
- \(H_2[z]\) — transfer function of the second block.

**When to use:** whenever blocks are connected in series along a single signal path.

**Exam trigger:** words like *series*, *cascade*, or a diagram showing \(H_1\) feeding \(H_2\).

**Tiny example:** if \(H_1[z] = \dfrac{1}{1-0.5z^{-1}}\) and \(H_2[z] = 2\), then

$$H_{\text{cascade}}[z] = \frac{2}{1-0.5z^{-1}}$$

#### COMMON MISUSE
Adding the transfer functions just because two blocks appear in the same diagram. Check whether the signal flows *through* them sequentially or *splits* between them.

$$H_{\text{cascade}}[z]=H_1[z]\,H_2[z]$$

## 5. Parallel connection

Parallel means the **same input** is sent through two separate branches simultaneously, and the branch outputs are combined at a summing node.

- \(H_1[z]\) — transfer function of the first branch.
- \(H_2[z]\) — transfer function of the second branch.

**When to use:** when a diagram splits the input into separate paths and recombines them with an adder.

**Exam trigger:** two branches share the same input and their outputs meet at a summing node.

**Tiny example:** if \(H_1[z] = 3\) and \(H_2[z] = z^{-1}\), then

$$H_{\text{parallel}}[z] = 3 + z^{-1}$$

#### COMMON MISUSE
Multiplying parallel branches as if the signal passes through them one after another. If the input splits and outputs are summed, always add the transfer functions.

$$H_{\text{parallel}}[z]=H_1[z]+H_2[z]$$

---
**📌 Key Takeaways**
- **Rational transfer function (5.29):** $$H[z]=\frac{b_0z^N+b_1z^{N-1}+\cdots+b_{N-1}z+b_N}{z^N+a_1z^{N-1}+\cdots+a_{N-1}z+a_N}$$ The system order \(N\) equals the number of unit-delay stages needed for direct-form realization.
- **Difference equation:** $$y[n]+a_1y[n-1]+\cdots+a_Ny[n-N]=b_0x[n]+b_1x[n-1]+\cdots+b_Nx[n-N]$$ When isolating \(y[n]\), all \(a\)-terms move to the right side and change sign.
- **\(b\)-coefficients create feedforward input paths; \(a\)-coefficients create feedback output paths.** In a direct-form diagram, input-side taps carry \(b_k\) multipliers and output-side feedback taps carry \(-a_k\) multipliers.
- **Cascade connection:** $$H_{\text{cascade}}[z]=H_1[z]\,H_2[z]$$ Signal flows through subsystems one after another — transfer functions multiply.
- **Parallel connection:** $$H_{\text{parallel}}[z]=H_1[z]+H_2[z]$$ Same input splits into branches whose outputs are summed — transfer functions add.
- **Drawing recipe:** normalize denominator → count order \(N\) → draw \(N\) delays → attach \(b\)-taps to input chain → attach \(-a\)-taps to output feedback chain.
- **Coefficient order follows descending powers of \(z\)**, not the order numbers appear after algebraic rearrangement.

- Core formula: \(H[z]=\frac{b_0z^N+b_1z^{N-1}+\cdots+b_{N-1}z+b_N}{z^N+a_1z^{N-1}+\cdots+a_{N-1}z+a_N}\).
- Core formula: \(y[n]+a_1y[n-1]+\cdots+a_Ny[n-N]=b_0x[n]+b_1x[n-1]+\cdots+b_Nx[n-N]\).
- Core formula: \(H_{\text{cascade}}[z]=H_1[z]\,H_2[z]\).
*In the next section we will use \(H[z]\) on the unit circle to study frequency response.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NywicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo2LCJtYXgiOjh9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InJhdGlvbmFsX3RyYW5zZmVyX2Z1bmN0aW9uX2Zvcm0iLCJsYWJlbCI6IlJlYWRpbmcgdGhlIHN0YW5kYXJkIHJhdGlvbmFsIGZvcm0gb2YgSFt6XSIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMV9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiSW4gZXF1YXRpb24gKDUuMjkpLCB3aGF0IGlzIHRoZSBzeXN0ZW0gb3JkZXIgXFwoTlxcKSBtb3N0IGRpcmVjdGx5IHRlbGxpbmcgeW91IGZvciBhIGRpcmVjdC1mb3JtIHJlYWxpemF0aW9uPyIsIm9wdGlvbnMiOlsiQS4gVGhlIG51bWJlciBvZiBpbnB1dCBzYW1wbGVzIHRoYXQgbXVzdCBiZSBpZ25vcmVkIiwiQi4gVGhlIG51bWJlciBvZiB1bml0LWRlbGF5IHN0YWdlcyBub3JtYWxseSBuZWVkZWQiLCJDLiBUaGUgbnVtYmVyIG9mIHBvbGVzIG91dHNpZGUgdGhlIHVuaXQgY2lyY2xlIiwiRC4gVGhlIG51bWJlciBvZiBwYXJhbGxlbCBicmFuY2hlcyBpbiB0aGUgc3lzdGVtIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiRm9yIHRoZSBzdGFuZGFyZCBcXChOXFwpdGgtb3JkZXIgdHJhbnNmZXIgZnVuY3Rpb24sIGEgZGlyZWN0LWZvcm0gcmVhbGl6YXRpb24gbm9ybWFsbHkgdXNlcyBcXChOXFwpIHVuaXQtZGVsYXkgc3RhZ2VzLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoZSBzeXN0ZW0gdXNlcyBkZWxheWVkIGlucHV0IGFuZCBvdXRwdXQgc2FtcGxlczsgaXQgZG9lcyBub3QgaWdub3JlIGlucHV0IHNhbXBsZXMuIiwiQyI6IlBvbGUgbG9jYXRpb24gYWZmZWN0cyBzdGFiaWxpdHksIG5vdCB0aGUgYmFzaWMgY291bnQgb2YgZGVsYXkgc3RhZ2VzIGluIHRoZSByZWFsaXphdGlvbiBmb3JtLiIsIkQiOiJQYXJhbGxlbCBicmFuY2hlcyBhcmUgYSBjb25uZWN0aW9uIHN0cnVjdHVyZSwgbm90IHdoYXQgXFwoTlxcKSBkaXJlY3RseSBjb3VudHMuIn0sImhpbnQiOiJMb29rIGF0IHRoZSBoaWdoZXN0IHBvd2VyIGluIHRoZSBudW1lcmF0b3IgYW5kIGRlbm9taW5hdG9yLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwMV9xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiRm9yIFxcKEhbel09XFxkZnJhY3s0el4yKzd6KzF9e3peMiswLjN6LTAuMn1cXCksIHdoaWNoIGNvZWZmaWNpZW50IGlkZW50aWZpY2F0aW9uIGlzIGNvcnJlY3Q/Iiwib3B0aW9ucyI6WyJBLiBcXChiXzAgPSA0LFxcIGJfMSA9IDcsXFwgYl8yID0gMSxcXCBhXzEgPSAwLjMsXFwgYV8yID0gLTAuMlxcKSIsIkIuIFxcKGJfMCA9IDEsXFwgYl8xID0gNyxcXCBiXzIgPSA0LFxcIGFfMSA9IC0wLjIsXFwgYV8yID0gMC4zXFwpIiwiQy4gXFwoYl8wID0gNCxcXCBiXzEgPSA3LFxcIGJfMiA9IDEsXFwgYV8xID0gMSxcXCBhXzIgPSAwLjNcXCkiLCJELiBcXChiXzAgPSAwLjMsXFwgYl8xID0gLTAuMixcXCBhXzEgPSA0LFxcIGFfMiA9IDdcXCkiXSwiY29ycmVjdF9vcHRpb24iOiJBIiwiZXhwbGFuYXRpb24iOiJDb2VmZmljaWVudHMgYXJlIHJlYWQgaW4gZGVzY2VuZGluZyBwb3dlcnMgb2YgXFwoelxcKSwgYW5kIHRoZSBsZWFkaW5nIGRlbm9taW5hdG9yIGNvZWZmaWNpZW50IGlzIG5vcm1hbGl6ZWQgdG8gMS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJUaGlzIHJldmVyc2VzIHRoZSBjb2VmZmljaWVudCBvcmRlci4iLCJDIjoiVGhlIGxlYWRpbmcgZGVub21pbmF0b3IgY29lZmZpY2llbnQgMSBpcyBub3QgXFwoYV8xXFwpOyBpdCBpcyB0aGUgbm9ybWFsaXplZCBsZWFkaW5nIGNvZWZmaWNpZW50LiIsIkQiOiJUaGlzIHN3YXBzIG51bWVyYXRvciBhbmQgZGVub21pbmF0b3IgY29lZmZpY2llbnQgcm9sZXMuIn0sImhpbnQiOiJNYXRjaCBcXChiXzBcXCkgd2l0aCBcXCh6Xk5cXCksIFxcKGJfMVxcKSB3aXRoIFxcKHpee04tMX1cXCksIGFuZCBzbyBvbi4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6ImRpZmZlcmVuY2VfZXF1YXRpb25fYW5kX3NpZ25zIiwibGFiZWwiOiJDb252ZXJ0aW5nIEhbel0gaW50byBhbiBpbnB1dC1vdXRwdXQgcmVjdXJzaW9uIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AyX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJHaXZlbiBcXChIW3pdPVxcZGZyYWN7MnorM317eiswLjR9XFwpLCB3aGljaCBkaWZmZXJlbmNlIGVxdWF0aW9uIG1hdGNoZXMgdGhlIHN0YW5kYXJkIGZvcm0gYmVmb3JlIGlzb2xhdGluZyBcXCh5W25dXFwpPyIsIm9wdGlvbnMiOlsiQS4gXFwoeVtuXSswLjR5W24tMV09Mnhbbl0rM3hbbi0xXVxcKSIsIkIuIFxcKHlbbl0tMC40eVtuLTFdPTJ4W25dKzN4W24tMV1cXCkiLCJDLiBcXCh5W25dKzN5W24tMV09Mnhbbl0rMC40eFtuLTFdXFwpIiwiRC4gXFwoeVtuXT0yeFtuXSszeFtuLTFdKzAuNHlbbi0xXVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IlRoZSBkZW5vbWluYXRvciBjb2VmZmljaWVudCBcXChhXzEgPSAwLjRcXCkgc3RheXMgb24gdGhlIGxlZnQgc2lkZSBpbiB0aGUgc3RhbmRhcmQgZGlmZmVyZW5jZS1lcXVhdGlvbiBmb3JtLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6IlRoZSBzaWduIGlzIHdyb25nIGJlZm9yZSBpc29sYXRpbmcgXFwoeVtuXVxcKS4iLCJDIjoiVGhpcyBpbmNvcnJlY3RseSBwdXRzIG51bWVyYXRvciBjb2VmZmljaWVudCAzIG9uIHRoZSBvdXRwdXQgc2lkZS4iLCJEIjoiSWYgXFwoeVtuXVxcKSBpcyBpc29sYXRlZCwgdGhlIFxcKDAuNHlbbi0xXVxcKSB0ZXJtIHNob3VsZCBtb3ZlIHdpdGggYSBuZWdhdGl2ZSBzaWduLiJ9LCJoaW50IjoiRmlyc3Qgd3JpdGUgXFwoeVtuXSArIGFfMSB5W24tMV0gPSBiXzAgeFtuXSArIGJfMSB4W24tMV1cXCkuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoia3AyX3EyIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJBIHN0dWRlbnQgc29sdmVzIFxcKHlbbl0rMC40eVtuLTFdPTJ4W25dKzN4W24tMV1cXCkgYXMgXFwoeVtuXT0yeFtuXSszeFtuLTFdKzAuNHlbbi0xXVxcKS4gV2hhdCBpcyB3cm9uZz8iLCJvcHRpb25zIjpbIkEuIFRoZSBmZWVkYmFjayB0ZXJtIHNob3VsZCBiZWNvbWUgXFwoLTAuNHlbbi0xXVxcKSBhZnRlciBtb3ZpbmcgdG8gdGhlIHJpZ2h0IHNpZGUiLCJCLiBUaGUgaW5wdXQgdGVybXMgc2hvdWxkIGRpc2FwcGVhciIsIkMuIFRoZSBjb2VmZmljaWVudCAwLjQgc2hvdWxkIG11bHRpcGx5IFxcKHhbbi0xXVxcKSwgbm90IFxcKHlbbi0xXVxcKSIsIkQuIE5vdGhpbmcgaXMgd3JvbmciXSwiY29ycmVjdF9vcHRpb24iOiJBIiwiZXhwbGFuYXRpb24iOiJNb3ZpbmcgXFwoKzAuNHlbbi0xXVxcKSBmcm9tIHRoZSBsZWZ0IHNpZGUgdG8gdGhlIHJpZ2h0IHNpZGUgY2hhbmdlcyBpdHMgc2lnbi4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJUaGUgaW5wdXQgdGVybXMgcmVtYWluIG9uIHRoZSByaWdodCBzaWRlLiIsIkMiOiJUaGUgZGVub21pbmF0b3IgY29lZmZpY2llbnQgYmVsb25ncyB0byB0aGUgZGVsYXllZCBvdXRwdXQgdGVybSwgbm90IHRoZSBpbnB1dCB0ZXJtLiIsIkQiOiJUaGVyZSBpcyBhIHNpZ24gZXJyb3IgaW4gdGhlIGlzb2xhdGVkIHJlY3Vyc2lvbi4ifSwiaGludCI6IldoZW4gYSB0ZXJtIGNyb3NzZXMgdGhlIGVxdWFscyBzaWduLCB3aGF0IGhhcHBlbnMgdG8gaXRzIHNpZ24/IiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJkaXJlY3RfZm9ybV92aXN1YWxfcmVjb2duaXRpb24iLCJsYWJlbCI6IlJlY29nbml6aW5nIGRpcmVjdC1mb3JtIHJlYWxpemF0aW9uIGRpYWdyYW1zIiwiaW1wb3J0YW5jZSI6Im1lZGl1bSIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6MX0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDNfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6Ik9ic2VydmUgYSBkaXJlY3QtZm9ybSBkaWdpdGFsLWZpbHRlciBkaWFncmFtIHdpdGggdW5pdCBkZWxheXMsIGlucHV0LXNpZGUgYi10YXBzLCBhbmQgb3V0cHV0LXNpZGUgZmVlZGJhY2sgdGFwcy4gV2hpY2ggc3RhdGVtZW50IGlzIHRoZSBiZXN0IGludGVycHJldGF0aW9uPyIsIm9wdGlvbnMiOlsiQS4gXFwoYlxcKS1jb2VmZmljaWVudHMgbXVsdGlwbHkgZGVsYXllZCBpbnB1dCBzYW1wbGVzOyBcXChhXFwpLWNvZWZmaWNpZW50cyBhcmUgdGllZCB0byBkZWxheWVkIG91dHB1dCBmZWVkYmFjayBwYXRocyIsIkIuIFxcKGFcXCktY29lZmZpY2llbnRzIG11bHRpcGx5IG9ubHkgdGhlIHByZXNlbnQgaW5wdXQgXFwoeFtuXVxcKSIsIkMuIFVuaXQgZGVsYXlzIHJlcHJlc2VudCBtdWx0aXBsaWNhdGlvbiBieSB0aGUgc2FtcGxpbmcgZnJlcXVlbmN5IiwiRC4gRXZlcnkgbXVsdGlwbGllciBpbiB0aGUgZGlhZ3JhbSBtdXN0IGJlIGEgbnVtZXJhdG9yIGNvZWZmaWNpZW50Il0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiRGlyZWN0LWZvcm0gcmVhbGl6YXRpb24gc2VwYXJhdGVzIGZlZWRmb3J3YXJkIGlucHV0IHBhdGhzIChcXChiXFwpLXRhcHMpIGZyb20gZmVlZGJhY2sgb3V0cHV0IHBhdGhzIChcXChhXFwpLXRhcHMpLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6IkRlbm9taW5hdG9yIGNvZWZmaWNpZW50cyBhcmUgYXNzb2NpYXRlZCB3aXRoIG91dHB1dCBmZWVkYmFjaywgbm90IG9ubHkgdGhlIHByZXNlbnQgaW5wdXQuIiwiQyI6IkEgdW5pdCBkZWxheSBzdG9yZXMgYW5kIHNoaWZ0cyBhIHNlcXVlbmNlIGJ5IG9uZSBzYW1wbGU7IGl0IGlzIG5vdCBtdWx0aXBsaWNhdGlvbiBieSBzYW1wbGluZyBmcmVxdWVuY3kuIiwiRCI6IkZlZWRiYWNrIG11bHRpcGxpZXJzIGNvbWUgZnJvbSBkZW5vbWluYXRvciBjb2VmZmljaWVudHMuIn0sImhpbnQiOiJBc2sgd2hldGhlciB0aGUgYnJhbmNoIGlzIGNvbm5lY3RlZCB0byBkZWxheWVkIFxcKHhcXCktdmFsdWVzIG9yIGRlbGF5ZWQgXFwoeVxcKS12YWx1ZXMuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6ImRpcmVjdF9mb3JtX2Jsb2NrX2RpYWdyYW0iLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfV19LHsiaWQiOiJjYXNjYWRlX3ZzX3BhcmFsbGVsIiwibGFiZWwiOiJDYXNjYWRlIGFuZCBwYXJhbGxlbCB0cmFuc2Zlci1mdW5jdGlvbiBjb21iaW5hdGlvbnMiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoibWVkaXVtIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwNF9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiVHdvIHN5c3RlbXMgXFwoSF8xW3pdXFwpIGFuZCBcXChIXzJbel1cXCkgYXJlIGNvbm5lY3RlZCBpbiBjYXNjYWRlLiBXaGF0IGlzIHRoZSB0b3RhbCB0cmFuc2ZlciBmdW5jdGlvbj8iLCJvcHRpb25zIjpbIkEuIFxcKEhfMVt6XSArIEhfMlt6XVxcKSIsIkIuIFxcKEhfMVt6XVxcLEhfMlt6XVxcKSIsIkMuIFxcKEhfMVt6XSAtIEhfMlt6XVxcKSIsIkQuIFxcKEhfMVt6XS9IXzJbel1cXCkgYWx3YXlzIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiQ2FzY2FkZSBtZWFucyB0aGUgc2lnbmFsIHBhc3NlcyB0aHJvdWdoIG9uZSBzeXN0ZW0gYW5kIHRoZW4gdGhlIG5leHQsIHNvIHRoZSB0cmFuc2ZlciBmdW5jdGlvbnMgbXVsdGlwbHkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiQWRkaXRpb24gaXMgZm9yIHBhcmFsbGVsIGJyYW5jaGVzIHdob3NlIG91dHB1dHMgYXJlIHN1bW1lZC4iLCJDIjoiU3VidHJhY3Rpb24gd291bGQgcmVxdWlyZSBhIHN1YnRyYWN0aW5nIG5vZGUsIG5vdCBvcmRpbmFyeSBjYXNjYWRlLiIsIkQiOiJEaXZpc2lvbiBpcyBub3QgdGhlIGdlbmVyYWwgY2FzY2FkZSBydWxlLiJ9LCJoaW50IjoiT25lLWFmdGVyLWFub3RoZXIgYmxvY2tzIG11bHRpcGx5LiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJjYXNjYWRlX2Jsb2NrX2RpYWdyYW0iLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDRfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IlRoZSBzYW1lIGlucHV0IHNwbGl0cyBpbnRvIHR3byBicmFuY2hlcyBcXChIXzFbel1cXCkgYW5kIFxcKEhfMlt6XVxcKSwgYW5kIHRoZSBicmFuY2ggb3V0cHV0cyBhcmUgYWRkZWQuIFdoYXQgaXMgdGhlIHRvdGFsIHRyYW5zZmVyIGZ1bmN0aW9uPyIsIm9wdGlvbnMiOlsiQS4gXFwoSF8xW3pdXFwsSF8yW3pdXFwpIiwiQi4gXFwoSF8xW3pdICsgSF8yW3pdXFwpIiwiQy4gXFwoSF8xW3pdLygxK0hfMlt6XSlcXCkiLCJELiBcXChIXzJbel0gLSBIXzFbel1cXCkgb25seSJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IlBhcmFsbGVsIGJyYW5jaGVzIHJlY2VpdmluZyB0aGUgc2FtZSBpbnB1dCBhbmQgcmVjb21iaW5pbmcgYXQgYW4gYWRkZXIgcHJvZHVjZSB0aGUgc3VtIG9mIGJyYW5jaCB0cmFuc2ZlciBmdW5jdGlvbnMuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiTXVsdGlwbGljYXRpb24gaXMgdGhlIGNhc2NhZGUgcnVsZS4iLCJDIjoiVGhhdCByZXNlbWJsZXMgYSBmZWVkYmFjay1zdHlsZSBleHByZXNzaW9uLCBub3Qgb3JkaW5hcnkgcGFyYWxsZWwgYWRkaXRpb24uIiwiRCI6IlN1YnRyYWN0aW9uIHdvdWxkIHJlcXVpcmUgYSBzcGVjaWZpZWQgc3VidHJhY3Rpbmcgbm9kZSBhbmQgc2lnbi4ifSwiaGludCI6IlNpZGUtYnktc2lkZSBicmFuY2hlcyB0aGF0IHJlY29tYmluZSB3aXRoIGFuIGFkZGVyIGFkZC4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoicGFyYWxsZWxfYmxvY2tfZGlhZ3JhbSIsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfV19" style="display:none;"></div>%%KC_END%%
