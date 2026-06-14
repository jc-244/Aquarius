%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6ImJvdGgiLCJyYXRpb25hbGUiOiJUaGlzIHNlY3Rpb24gaGFzIG9uZSBzdGFibGUgdmlzdWFsIGlkZWEgYW5kIG9uZSBkeW5hbWljIHZpc3VhbCBpZGVhLiBBIFdpa2ltZWRpYS9XaWtpcGVkaWEtc3R5bGUgcmVmZXJlbmNlIGltYWdlIGlzIGFwcHJvcHJpYXRlIGZvciB0aGUgYmFzaWMgc3RlbS1wbG90IGNvbnZlbnRpb24sIHdoaWxlIGEgUmVhY3QgQ2FudmFzIGRlbW8gaXMgdGhlIHN0cm9uZ2VzdCB3YXkgdG8gc2hvdyB3aHkgZlstMm5dIGFuZCBmWy0ybisxXSBhcmUgbm90IG1lcmVseSBzaGlmdGVkIHZlcnNpb25zIG9mIGVhY2ggb3RoZXIgaW4gZGlzY3JldGUgdGltZS4gTm8gY3JvcHBlZCB0ZXh0Ym9vayBmaWd1cmVzIGFyZSBhdmFpbGFibGUsIGFuZCBmdWxsLXBhZ2Ugc2NyZWVuc2hvdHMgc2hvdWxkIG5vdCBiZSB1c2VkLiIsImNyYW0iOiJVc2UgdmlzdWFscyB0byBpbnN0YW50bHkgcmVjb2duaXplOiBkaXNjcmV0ZSBzYW1wbGVzIGFyZSBzdGVtcyBhdCBpbnRlZ2VyIG4sIGFuZCB0cmFuc2Zvcm1lZCBpbmRleCBleHByZXNzaW9ucyBjYW4gc2VsZWN0IGRpZmZlcmVudCBzYW1wbGUgc3Vic2V0cy4iLCJzdGFuZGFyZCI6IlVzZSB0aGUgc3RlbSBwbG90IGFzIHRoZSBiYXNpYyByZXByZXNlbnRhdGlvbiwgdGhlbiB1c2UgdGhlIGRlbW8gdG8gY29ubmVjdCBpbmRleCBzdWJzdGl0dXRpb24gdG8gdmlzaWJsZSBzYW1wbGUgcG9zaXRpb25zLiIsInRvcF9zY29yZSI6IlVzZSB0aGUgZGVtbyB0byBleHBvc2UgdGhlIHRyYXAgdGhhdCBjb250aW51b3VzLXRpbWUgc2hpZnQgaW50dWl0aW9uIGZhaWxzIGFmdGVyIGRpc2NyZXRlLXRpbWUgc2NhbGluZyBhbmQgcGFyaXR5IGNoYW5nZXMuIn0=" style="display:none;"></div>%%KC_END%%
# Discrete-Time Functions and Stem Plots

> **Section Objective:** Learn how discrete-time signals are represented, plotted with stem plots, and transformed carefully in MATLAB.

---

## Concepts In This Section

- discrete-time function
- anonymous function in MATLAB
- stem plot
- integer index range
- time scaling and reflection
- discrete-time transformation trap

## 1. A discrete-time function lives only at integer n

A discrete-time signal \(f[n]\) is defined **only at integer sample indices** — values like \(n = -3, 0, 1, 7\). There is no sample between integers; the signal simply does not exist there.

MATLAB anonymous functions do not automatically enforce this restriction. If you write `f = @(n) exp(-n/5).*\\cos(pi*n/5).*(n>=0)` and call `f(0.5)`, MATLAB will return a number such as \(0.8606\) — but that result has no meaning for the true discrete-time signal. A NaN or zero would be more appropriate at a noninteger index.

### COMMON MISTAKE

Students assume that because MATLAB returns a value, the signal is defined there.

> **Exam Warning:** Do not confuse what MATLAB can compute with what the discrete-time signal actually means.

## 2. Stem plots show samples, not a continuous curve

- **\(f[n]\)** — the sample value at integer index \(n\); only meaningful when \(n\) is an integer.
- **\(e^{-n/5}\)** — exponential decay envelope; the signal shrinks as \(n\) grows.
- **\(\cos(\pi n/5)\)** — oscillation at normalized frequency \(\pi/5\) radians per sample.
- **\(u[n]\)** — unit step; turns the signal on for \(n \geq 0\) and keeps it zero for \(n < 0\).

**When to use:** Evaluate or plot this formula only at integer values of \(n\).

**Common misuse:** Evaluating at noninteger \(n\) (e.g., \(n = 0.5\)) as if it were an ordinary continuous-time function.

$$f[n] = e^{-n/5}\cos\!\left(\frac{\pi n}{5}\right)u[n]$$

## 3. Discrete-time transformations can break continuous-time intuition

### Minimal Concrete Example

- **\(n = 0\) (valid):** \(f[0] = e^{0}\cdot\cos(0)\cdot u[0] = 1 \cdot 1 \cdot 1 = 1\). This is a valid sample.
- **\(n = 0.5\) (invalid):** MATLAB may return approximately \(0.8606\), but \(n = 0.5\) is not an integer index. The true discrete-time signal has no sample there.

## 2. Stem plots show samples, not a continuous curve

A **stem plot** places one vertical stem at each integer index \(n\), with the stem height equal to \(f[n]\). Each stem is visually isolated — there is no line connecting adjacent samples.

Contrast this with MATLAB's `plot` command: `plot` draws line segments between data points, which can visually imply a continuous curve between samples. That implication is misleading for a discrete-time signal.

The textbook uses the finite index range \(-10 \leq n \leq 10\). The independent variable vector must contain **integers only** — not a dense decimal grid. Supplying a noninteger grid to `stem` would misrepresent the signal's domain.

### EXAM TIP

Whenever a problem asks you to plot or evaluate a discrete-time signal over a finite range, your index vector must be a set of integers.

$$n \in \{-10,\,-9,\,\ldots,\,9,\,10\}$$
*This is the finite integer index set used for the textbook stem plot — 21 integer values from \(-10\) to \(10\) inclusive.

**Exam trigger:** Any request to plot or evaluate a discrete-time signal over a finite range. Your answer must list integer indices, not a continuous interval.

**Common misuse:** Using a dense noninteger grid such as `n = -10:0.1:10` as if the signal were continuous. This produces meaningless intermediate values and misrepresents the discrete-time domain.*


## 3. Discrete-time transformations can break continuous-time intuition

Expressions like \(f[-2n]\) and \(f[-2n+1]\) are formed by substituting a new index expression into \(f[\,]\). In continuous time, you might expect \(f[-2t+1]\) to be a simple shifted version of \(f[-2t]\) — and that intuition would be correct.

**In discrete time, that intuition fails.** The transformed index must land on integer sample locations, and different expressions select different subsets of the original samples.

> **Key textbook conclusion:** Contrary to the continuous case, \(f[-2n+1]\) is **not** a shifted version of \(f[-2n]\).

The reason: \(-2n\) always produces even integers, while \(-2n+1\) always produces odd integers. These are disjoint sample subsets.

The original \(f[n]\) can be recovered by **interleaving** the samples of \(f[-2n]\) and \(f[-2n+1]\), then time-reflecting the result.

### WHY THIS MATTERS FOR THE EXAM

Never apply continuous-time shift intuition to discrete-time index expressions without checking which original sample indices are actually selected.

$$f[-2n]$$
*This transformation does two things simultaneously:

1. **Reflects** the index direction (the negative sign reverses the sequence).
2. **Downsamples** by selecting only even-indexed locations of the original \(f\), because \(-2n\) is always even when \(n\) is an integer.

**Exam trigger:** Whenever the inside of \(f[\,]\) contains a multiplier on \(n\), track which original sample indices are actually selected — do not treat it as a pure time reversal.

**Common misuse:** Calling \(f[-2n]\) only a time reversal and forgetting that the factor \(2\) skips half the original samples.*

$$f[-2n+1]$$
*This transformation reflects and scales the index expression, but the \(+1\) shifts the inside index from even values to **odd values**: for any integer \(n\), \(-2n+1\) is always odd.

This means \(f[-2n+1]\) selects a completely different sample subset from \(f[-2n]\) — the two expressions are **not** related by a simple output shift.

**Exam trigger:** When you see \(f[-2n+1]\), do not assume it is \(f[-2n]\) shifted by one output sample. Verify by substituting \(n = -1, 0, 1, 2\) and listing the inside index values.

**Common misuse:** Applying continuous-time shift intuition — assuming \(+1\) inside the argument always produces a one-sample output shift — without checking the integer index mapping.*

---
**📌 Key Takeaways**
- \(f[n] = e^{-n/5}\cos\!\left(\dfrac{\pi n}{5}\right)u[n]\) is valid **only at integer \(n\)**; MATLAB can evaluate the formula at noninteger inputs, but those results do not represent valid discrete-time samples.
- Stem plots display isolated samples over the finite integer index set \(n \in \{-10,\,-9,\,\ldots,\,9,\,10\}\); always use an integer-only index vector, never a dense decimal grid.
- \(f[-2n]\) selects only even-indexed original samples (reversed); \(f[-2n+1]\) selects only odd-indexed original samples — they are disjoint subsets, not shifted versions of each other.
- Contrary to the continuous case, \(f[-2n+1]\) is **not** a shifted version of \(f[-2n]\); the original \(f[n]\) can be recovered by interleaving both and time-reflecting.

*Next, you will use these MATLAB habits to compute and interpret discrete-time system responses.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NywicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo2LCJtYXgiOjh9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6ImRpc2NyZXRlX3RpbWVfaW50ZWdlcl9kb21haW4iLCJsYWJlbCI6IkRpc2NyZXRlLXRpbWUgZnVuY3Rpb25zIGFyZSBkZWZpbmVkIGF0IGludGVnZXIgaW5kaWNlcyIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMV9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiVGhlIHRleHRib29rIGRlZmluZXMgXFwoZltuXSA9IGVeey1uLzV9XFxjb3MoXFxwaSBuLzUpXFwsdVtuXVxcKS4gV2hpY2ggaW5wdXQgaXMgYSB2YWxpZCBkaXNjcmV0ZS10aW1lIHNhbXBsZSBpbmRleD8iLCJvcHRpb25zIjpbIkEuIFxcKG4gPSAwLjVcXCkiLCJCLiBcXChuID0gXFxzcXJ0ezJ9XFwpIiwiQy4gXFwobiA9IC0zXFwpIiwiRC4gXFwobiA9IFxccGlcXCkiXSwiY29ycmVjdF9vcHRpb24iOiJDIiwiZXhwbGFuYXRpb24iOiJBIGRpc2NyZXRlLXRpbWUgc2lnbmFsIGlzIGluZGV4ZWQgYnkgaW50ZWdlcnMuIFxcKG4gPSAtM1xcKSBpcyBhbiBpbnRlZ2VyLCBzbyBcXChmWy0zXVxcKSBpcyBhIHZhbGlkIHNhbXBsZSBsb2NhdGlvbi4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJcXCgwLjVcXCkgaXMgbm90IGFuIGludGVnZXIgaW5kZXgsIGV2ZW4gaWYgTUFUTEFCIGNhbiBldmFsdWF0ZSB0aGUgYW5vbnltb3VzIGZ1bmN0aW9uIHRoZXJlLiIsIkIiOiJcXChcXHNxcnR7Mn1cXCkgaXMgbm90IGFuIGludGVnZXIgaW5kZXguIiwiRCI6IlxcKFxccGlcXCkgaXMgbm90IGFuIGludGVnZXIgaW5kZXguIn0sImhpbnQiOiJBc2sgd2hldGhlciB0aGUgaW5kZXggaXMgYW4gaW50ZWdlciBzYW1wbGUgbnVtYmVyLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwMV9xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiTUFUTEFCIHJldHVybnMgYSBudW1iZXIgZm9yIFxcKGYoMC41KVxcKS4gV2hhdCBpcyB0aGUgYmVzdCBpbnRlcnByZXRhdGlvbj8iLCJvcHRpb25zIjpbIkEuIFRoZSBkaXNjcmV0ZS10aW1lIHNpZ25hbCBoYXMgYSByZWFsIHNhbXBsZSBhdCBcXChuID0gMC41XFwpLiIsIkIuIE1BVExBQiBldmFsdWF0ZWQgdGhlIGZvcm11bGEsIGJ1dCBcXChuID0gMC41XFwpIGlzIG5vdCBhIHZhbGlkIGRpc2NyZXRlLXRpbWUgc2FtcGxlIGluZGV4LiIsIkMuIFRoZSB1bml0IHN0ZXAgXFwodVtuXVxcKSBtYWtlcyBhbGwgbm9uaW50ZWdlciBzYW1wbGVzIHZhbGlkLiIsIkQuIFRoZSBzdGVtIGNvbW1hbmQgYXV0b21hdGljYWxseSBmaXhlcyB0aGUgdmFsdWUuIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiVGhlIGFub255bW91cyBmdW5jdGlvbiBkb2VzIG5vdCBhdXRvbWF0aWNhbGx5IHJlc3RyaWN0IFxcKG5cXCkgdG8gaW50ZWdlcnMuIE1BVExBQiBjYW4gY29tcHV0ZSBhIG51bWJlciB0aGF0IGRvZXMgbm90IHJlcHJlc2VudCBhIHZhbGlkIHNhbXBsZSBvZiB0aGUgaW50ZW5kZWQgZGlzY3JldGUtdGltZSBzaWduYWwuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiRGlzY3JldGUtdGltZSBzYW1wbGVzIG9jY3VyIGF0IGludGVnZXIgaW5kaWNlcyBvbmx5LiIsIkMiOiJcXCh1W25dXFwpIGNvbnRyb2xzIG9uL29mZiBiZWhhdmlvcjsgaXQgZG9lcyBub3QgbWFrZSBub25pbnRlZ2VyIGluZGljZXMgdmFsaWQuIiwiRCI6InN0ZW0gb25seSBwbG90cyBzdXBwbGllZCBkYXRhOyBpdCBkb2VzIG5vdCByZWRlZmluZSB0aGUgZnVuY3Rpb24ncyBkb21haW4uIn0sImhpbnQiOiJTZXBhcmF0ZSBNQVRMQUIncyBjYWxjdWxhdGlvbiBhYmlsaXR5IGZyb20gdGhlIG1hdGhlbWF0aWNhbCBtZWFuaW5nIG9mIFxcKGZbbl1cXCkuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJzdGVtX3Bsb3RfcmVwcmVzZW50YXRpb24iLCJsYWJlbCI6IlN0ZW0gcGxvdCByZXByZXNlbnRhdGlvbiBvdmVyIGEgZmluaXRlIGluZGV4IHJhbmdlIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6Im1lZGl1bSIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6MX0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDJfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkZvciBwbG90dGluZyBcXChmW25dXFwpIG92ZXIgXFwoLTEwIFxcbGVxIG4gXFxsZXEgMTBcXCksIHdoaWNoIGluZGV4IHNldCBtYXRjaGVzIHRoZSBzZWN0aW9uPyIsIm9wdGlvbnMiOlsiQS4gXFwobiA9IFxcey0xMCwgLTksIFxcbGRvdHMsIDksIDEwXFx9XFwpIiwiQi4gXFwoblxcKSA9IGFsbCByZWFsIG51bWJlcnMgYmV0d2VlbiBcXCgtMTBcXCkgYW5kIFxcKDEwXFwpIiwiQy4gXFwobiA9IFxcezAsIDEsIFxcbGRvdHMsIDEwXFx9XFwpIG9ubHkiLCJELiBcXChuID0gXFx7LTEwLjAsIC05LjksIC05LjgsIFxcbGRvdHMsIDEwLjBcXH1cXCkiXSwiY29ycmVjdF9vcHRpb24iOiJBIiwiZXhwbGFuYXRpb24iOiJUaGUgc2VjdGlvbiB1c2VzIHRoZSBpbnRlZ2VyIGluZGV4IHJhbmdlIGZyb20gXFwoLTEwXFwpIHRvIFxcKDEwXFwpLCBpbmNsdXNpdmUuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJCIjoiVGhhdCB3b3VsZCBkZXNjcmliZSBhIGNvbnRpbnVvdXMgaW50ZXJ2YWwsIG5vdCBhIGRpc2NyZXRlLXRpbWUgaW5kZXggc2V0LiIsIkMiOiJUaGUgc2VjdGlvbiBpbmNsdWRlcyBuZWdhdGl2ZSBpbmRpY2VzIHRvby4iLCJEIjoiQSBkZW5zZSBkZWNpbWFsIGdyaWQgaXMgbm90IHRoZSBpbnRlbmRlZCBkaXNjcmV0ZS10aW1lIGluZGV4IHNldC4ifSwiaGludCI6IlN0ZW0gcGxvdHMgdXNlIHNhbXBsZSBpbmRpY2VzLCBub3QgYSBjb250aW51b3VzIGdyaWQuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX0seyJpZCI6ImtwMl9xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiQSBncmFwaCBzaG93cyBpc29sYXRlZCB2ZXJ0aWNhbCBsaW5lcyBhdCBpbnRlZ2VyIFxcKG5cXCkgdmFsdWVzLCB3aXRoIGEgbWFya2VyIGF0IHRoZSB0b3Agb2YgZWFjaCBsaW5lLiBXaGF0IE1BVExBQiBwbG90dGluZyBjb21tYW5kIGlzIG1vc3QgY29uc2lzdGVudCB3aXRoIHRoZSBzZWN0aW9uPyIsIm9wdGlvbnMiOlsiQS4gcGxvdCIsIkIuIHN0ZW0iLCJDLiB4bGFiZWwiLCJELiBzdWJwbG90Il0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiVGhlIHN0ZW0gY29tbWFuZCBpcyB1c2VkIHRvIGVtcGhhc2l6ZSBkaXNjcmV0ZS10aW1lIHNhbXBsZXMgd2l0aCB2ZXJ0aWNhbCBzdGVtcy4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJwbG90IHRlbmRzIHRvIHZpc3VhbGx5IGNvbm5lY3QgcG9pbnRzIGxpa2UgYSBjb250aW51b3VzIGN1cnZlLiIsIkMiOiJ4bGFiZWwgbGFiZWxzIHRoZSBob3Jpem9udGFsIGF4aXM7IGl0IGRvZXMgbm90IHBsb3QgZGF0YS4iLCJEIjoic3VicGxvdCBkaXZpZGVzIHRoZSBmaWd1cmUgd2luZG93OyBpdCBpcyBub3QgdGhlIHN0ZW0gcGxvdHRpbmcgY29tbWFuZC4ifSwiaGludCI6IldoaWNoIGNvbW1hbmQgbWFrZXMgZGlzY3JldGUgc2FtcGxlcyBsb29rIGxpa2Ugc3RlbXM/IiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6InZpc3VhbF9wYXR0ZXJuX3JlY29nbml0aW9uX2NoZWNrIiwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfSx7ImlkIjoibWF0bGFiX3VzZXJfcmVzcG9uc2liaWxpdHkiLCJsYWJlbCI6Ik1BVExBQiBkb2VzIHdoYXQgaXQgaXMgdG9sZCwgbm90IGFsd2F5cyB3aGF0IHRoZSBzaWduYWwgZGVmaW5pdGlvbiBpbnRlbmRzIiwiaW1wb3J0YW5jZSI6Im1lZGl1bSIsImV4YW1fd2VpZ2h0IjoibWVkaXVtIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoxfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwM19xMSIsInR5cGUiOiJzaG9ydF9hbnN3ZXIiLCJzdGVtIjoiQSBjbGFzc21hdGUgc2F5czogJ0JlY2F1c2UgTUFUTEFCIGV2YWx1YXRlcyBcXChmKDAuNSlcXCksIHRoZSBzaWduYWwgbXVzdCBiZSBkZWZpbmVkIGF0IFxcKG4gPSAwLjVcXCkuJyBFeHBsYWluIHdoeSB0aGlzIGlzIHdyb25nLiIsImlkZWFsX2Fuc3dlciI6IlRoZSBhbm9ueW1vdXMgTUFUTEFCIGZ1bmN0aW9uIGNhbiBldmFsdWF0ZSB0aGUgZm9ybXVsYSBmb3Igbm9uaW50ZWdlciBpbnB1dHMgdW5sZXNzIHJlc3RyaWN0ZWQsIGJ1dCB0aGUgaW50ZW5kZWQgZGlzY3JldGUtdGltZSBzaWduYWwgXFwoZltuXVxcKSBpcyBkZWZpbmVkIG9ubHkgYXQgaW50ZWdlciBzYW1wbGUgaW5kaWNlcy4gVGhlIE1BVExBQiBvdXRwdXQgYXQgXFwoMC41XFwpIGlzIGEgZm9ybXVsYSBldmFsdWF0aW9uLCBub3QgYSB2YWxpZCBkaXNjcmV0ZS10aW1lIHNhbXBsZS4iLCJncmFkaW5nX3J1YnJpYyI6WyJNdXN0IHN0YXRlIHRoYXQgZGlzY3JldGUtdGltZSBpbmRpY2VzIGFyZSBpbnRlZ2VycyIsIk11c3QgZGlzdGluZ3Vpc2ggTUFUTEFCIGZvcm11bGEgZXZhbHVhdGlvbiBmcm9tIHNpZ25hbCBkZWZpbml0aW9uIiwiTXVzdCBpZGVudGlmeSBcXChmKDAuNSlcXCkgYXMgaW52YWxpZCBvciBpbmFwcHJvcHJpYXRlIGZvciB0aGUgaW50ZW5kZWQgZGlzY3JldGUtdGltZSBzaWduYWwiXSwiZXhwbGFuYXRpb24iOiJUaGlzIGNoZWNrcyB0aGUgbWFpbiBwcmFjdGljYWwgd2FybmluZyBvZiB0aGUgc2VjdGlvbjogTUFUTEFCIHdpbGwgY29tcHV0ZSB3aGF0IHlvdSBhc2ssIGV2ZW4gaWYgdGhlIHJlcXVlc3QgaXMgY29uY2VwdHVhbGx5IHdyb25nLiIsImhpbnQiOiJBc2sgd2hldGhlciB0aGUgZnVuY3Rpb24gZGVmaW5pdGlvbiBvciBNQVRMQUIncyBzeW50YXggZGVjaWRlcyB0aGUgc2lnbmFsIGRvbWFpbi4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfV19LHsiaWQiOiJkaXNjcmV0ZV90aW1lX3RyYW5zZm9ybV90cmFwIiwibGFiZWwiOiJmWy0ybl0gdmVyc3VzIGZbLTJuKzFdIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3A0X3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJXaGljaCBzdGF0ZW1lbnQgbWF0Y2hlcyB0aGUgc2VjdGlvbidzIHdhcm5pbmcgYWJvdXQgXFwoZlstMm5dXFwpIGFuZCBcXChmWy0ybisxXVxcKT8iLCJvcHRpb25zIjpbIkEuIFxcKGZbLTJuKzFdXFwpIGlzIGFsd2F5cyBqdXN0IFxcKGZbLTJuXVxcKSBzaGlmdGVkIGJ5IG9uZSBvdXRwdXQgc2FtcGxlLiIsIkIuIFxcKGZbLTJuXVxcKSBhbmQgXFwoZlstMm4rMV1cXCkgYXJlIGlkZW50aWNhbCBmb3IgZXZlcnkgZGlzY3JldGUtdGltZSBzaWduYWwuIiwiQy4gXFwoZlstMm4rMV1cXCkgaXMgbm90IGdlbmVyYWxseSBhIHNoaWZ0ZWQgdmVyc2lvbiBvZiBcXChmWy0ybl1cXCkgaW4gZGlzY3JldGUgdGltZS4iLCJELiBUaGUgdHdvIGV4cHJlc3Npb25zIGFyZSBpbnZhbGlkIGJlY2F1c2UgbmVnYXRpdmUgaW5kaWNlcyBhcmUgZm9yYmlkZGVuLiJdLCJjb3JyZWN0X29wdGlvbiI6IkMiLCJleHBsYW5hdGlvbiI6IlRoZSBzZWN0aW9uIGV4cGxpY2l0bHkgc3RhdGVzIHRoYXQsIGNvbnRyYXJ5IHRvIHRoZSBjb250aW51b3VzIGNhc2UsIFxcKGZbLTJuKzFdXFwpIGlzIG5vdCBhIHNoaWZ0ZWQgdmVyc2lvbiBvZiBcXChmWy0ybl1cXCkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhpcyBpcyB0aGUgY29udGludW91cy10aW1lIGludHVpdGlvbiB0cmFwIHRoZSBzZWN0aW9uIHdhcm5zIGFnYWluc3QuIiwiQiI6IlRoZSBcXCgrMVxcKSBjaGFuZ2VzIHdoaWNoIG9yaWdpbmFsIHNhbXBsZSBpbmRpY2VzIGFyZSBzZWxlY3RlZC4iLCJEIjoiTmVnYXRpdmUgaW5kaWNlcyBjYW4gYmUgdmFsaWQgaW4gZGlzY3JldGUtdGltZSBzZXF1ZW5jZXM7IFxcKHVbbl1cXCkgbWF5IG1ha2Ugc29tZSB2YWx1ZXMgemVybywgYnV0IHRoZSBpbmRleCBpdHNlbGYgaXMgbm90IGZvcmJpZGRlbi4ifSwiaGludCI6IlRyYWNrIHRoZSBpbnNpZGUgaW5kZXggdmFsdWVzLCBub3QganVzdCB0aGUgdmlzdWFsIGxvb2sgb2YgdGhlIGZvcm11bGEuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6Indyb25nX3ZzX3JpZ2h0X3Zpc3VhbF9jaGVjayIsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwNF9xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiT2JzZXJ2ZSBhIGRlbW8gd2hlcmUgXFwoblxcKSBpcyBzd2VwdCB0aHJvdWdoIGludGVnZXJzLiBXaGljaCBvcmlnaW5hbCBzYW1wbGUtaW5kZXggcGF0dGVybiBkb2VzIFxcKGZbLTJuXVxcKSB1c2U/Iiwib3B0aW9ucyI6WyJBLiBPbmx5IGV2ZW4taW5kZXhlZCBsb2NhdGlvbnMgb2YgXFwoZlxcKSwgaW4gcmV2ZXJzZWQgZGlyZWN0aW9uIiwiQi4gT25seSBvZGQtaW5kZXhlZCBsb2NhdGlvbnMgb2YgXFwoZlxcKSwgaW4gZm9yd2FyZCBkaXJlY3Rpb24iLCJDLiBFdmVyeSBvcmlnaW5hbCBpbmRleCBvZiBcXChmXFwpIGluIHRoZSBzYW1lIG9yZGVyIiwiRC4gTm9uaW50ZWdlciBsb2NhdGlvbnMgaGFsZndheSBiZXR3ZWVuIHNhbXBsZXMiXSwiY29ycmVjdF9vcHRpb24iOiJBIiwiZXhwbGFuYXRpb24iOiJXaGVuIFxcKG5cXCkgaXMgYW4gaW50ZWdlciwgXFwoLTJuXFwpIGlzIGFsd2F5cyBldmVuLCBhbmQgdGhlIG5lZ2F0aXZlIHNpZ24gcmV2ZXJzZXMgdGhlIGRpcmVjdGlvbiBvZiB0aGUgc2VsZWN0ZWQgaW5kZXggdmFsdWVzLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6Ik9kZC1pbmRleGVkIGxvY2F0aW9ucyBhcmUgYXNzb2NpYXRlZCB3aXRoIHRoZSBcXCgrMVxcKSBleHByZXNzaW9uLCBub3QgXFwoLTJuXFwpLiIsIkMiOiJUaGUgZmFjdG9yIFxcKDJcXCkgc2tpcHMgaGFsZiB0aGUgb3JpZ2luYWwgaW50ZWdlciBpbmRpY2VzLiIsIkQiOiJcXCgtMm5cXCkgaXMgYWx3YXlzIGFuIGludGVnZXIgd2hlbiBcXChuXFwpIGlzIGFuIGludGVnZXIuIn0sImhpbnQiOiJQbHVnIGluIFxcKG4gPSAtMSwgMCwgMSwgMlxcKSBhbmQgbGlzdCBcXCgtMm5cXCkuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6ImRlbW9fb2JzZXJ2YXRpb25fY2hlY2siLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDRfcTMiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6Ik9ic2VydmUgYSBkZW1vIHdoZXJlIFxcKG5cXCkgaXMgc3dlcHQgdGhyb3VnaCBpbnRlZ2Vycy4gV2hpY2ggb3JpZ2luYWwgc2FtcGxlLWluZGV4IHBhdHRlcm4gZG9lcyBcXChmWy0ybisxXVxcKSB1c2U/Iiwib3B0aW9ucyI6WyJBLiBFdmVuLWluZGV4ZWQgbG9jYXRpb25zIG9ubHkiLCJCLiBPZGQtaW5kZXhlZCBsb2NhdGlvbnMgb25seSIsIkMuIEFsbCBpbnRlZ2VyIGxvY2F0aW9ucyBpbiBuYXR1cmFsIG9yZGVyIiwiRC4gTm9uaW50ZWdlciBsb2NhdGlvbnMgb25seSJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IkZvciBpbnRlZ2VyIFxcKG5cXCksIFxcKC0ybisxXFwpIGlzIGFsd2F5cyBvZGQuIFRoaXMgaXMgd2h5IFxcKGZbLTJuKzFdXFwpIHNlbGVjdHMgYSBkaWZmZXJlbnQgc3Vic2V0IGZyb20gXFwoZlstMm5dXFwpLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoZSBcXCgrMVxcKSBzaGlmdHMgdGhlIGluc2lkZSBpbmRleCBmcm9tIGV2ZW4gdmFsdWVzIHRvIG9kZCB2YWx1ZXMuIiwiQyI6IlRoZSBmYWN0b3IgXFwoMlxcKSBzdGlsbCBza2lwcyBoYWxmIHRoZSBvcmlnaW5hbCBpbnRlZ2VyIGluZGljZXMuIiwiRCI6IlxcKC0ybisxXFwpIGlzIGFsd2F5cyBhbiBpbnRlZ2VyIHdoZW4gXFwoblxcKSBpcyBhbiBpbnRlZ2VyLiJ9LCJoaW50IjoiUGx1ZyBpbiBcXChuID0gLTEsIDAsIDEsIDJcXCkgYW5kIGxpc3QgXFwoLTJuKzFcXCkuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6ImRlbW9fb2JzZXJ2YXRpb25fY2hlY2siLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX1dfQ==" style="display:none;"></div>%%KC_END%%
