%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6ImJvdGgiLCJyYXRpb25hbGUiOiJVc2UgYSBzdGF0aWMgcmVmZXJlbmNlIHZpc3VhbCBmb3IgdGhlIGJhc2ljIHN0ZW0tcGxvdCBzaGFwZSBvZiBcXCh1W25dXFwpLCB0aGVuIHVzZSBhIFJlYWN0ICsgQ2FudmFzIGRlbW8gZm9yIHNoaWZ0ZWQgc3RlcHMgYW5kIHdpbmRvd2luZyBiZWNhdXNlIHN0dWRlbnRzIG5lZWQgdG8gc2VlIGVuZHBvaW50cyBjaGFuZ2UgYXMgXFwodVtuLWFdLXVbbi1iXVxcKSBjaGFuZ2VzLiBUaGUgT0NSIHJlZmVyZW5jZXMgRmlnLiAzLjcsIGJ1dCBubyBwcmVjaXNpb24tY3JvcHBlZCBmaWd1cmUgYXNzZXQgaXMgYXZhaWxhYmxlLCBhbmQgZnVsbC1wYWdlIHNjcmVlbnNob3RzIG11c3Qgbm90IGJlIHVzZWQuIiwiY3JhbSI6Ik1ha2UgdGhlIHRyaWdnZXIgcGF0dGVybiBvYnZpb3VzOiBcXCh1W24tYV1cXCkgdHVybnMgb24gYXQgXFwoYVxcKSwgYW5kIFxcKHVbbi1hXS11W24tYl1cXCkga2VlcHMgc2FtcGxlcyBmcm9tIFxcKGFcXCkgdGhyb3VnaCBcXChiLTFcXCkuIiwic3RhbmRhcmQiOiJVc2UgdmlzdWFscyB0byBjb25uZWN0IHRoZSBwaWVjZXdpc2UgZGVmaW5pdGlvbiB0byBhY3R1YWwgZGlzY3JldGUgc3RlbXMgYW5kIG9uZSByZXByZXNlbnRhdGl2ZSBzaWduYWwtYnVpbGRpbmcgZXhhbXBsZS4iLCJ0b3Bfc2NvcmUiOiJFbXBoYXNpemUgZW5kcG9pbnQgdHJhcHMsIGFsbC1cXChuXFwpIHZhbGlkaXR5LCBhbmQgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBzdGFydGluZyBhIHNpZ25hbCBhbmQgY2FydmluZyBvdXQgYSBmaW5pdGUgaW50ZXJ2YWwuIn0=" style="display:none;"></div>%%KC_END%%
# Discrete-Time Unit Step Function \(u[n]\)

> **Section Objective:** Learn how the discrete-time unit step \(u[n]\) turns discrete signals on and helps build all-\(n\) signal formulas.

## Concepts In This Section

- Discrete-time unit step
- Multiplying by \(u[n]\)
- Shifted step windows
- All-\(n\) signal description

$$u[n] = \begin{cases}1, & n\ge 0 \\ 0, & n<0\end{cases}$$
Here \(n\) is an integer sample index — it takes only whole-number values. The step is completely off (equals 0) for every negative index, and completely on (equals 1) at \(n=0\) and every positive index after it.

**The value at \(n=0\) is included in the 'on' region.** The condition is \(n \ge 0\), not \(n > 0\).

**Minimal examples:**
- \(u[-2] = 0\) (negative index, off)
- \(u[0] = 1\) (origin, on)
- \(u[3] = 1\) (positive index, on)

### EXAM TRIGGER
Use \(u[n]\) whenever a discrete-time sequence suddenly starts at some index — it is the standard 'turn-on' switch.

#### Common Misuse
Forgetting that \(n=0\) belongs to the \(n \ge 0\) case. The step is 1 at the origin, not 0.


$$x_{\text{start}}[n] = x[n]\,u[n]$$
Multiplying any discrete-time signal by \(u[n]\) acts as a gate: it forces the output to zero for all \(n < 0\) while leaving every sample at \(n \ge 0\) completely unchanged.

**Symbol meanings:**
- \(x[n]\) — the original sequence, defined for all integers
- \(u[n]\) — the step gate (0 before origin, 1 at and after origin)
- \(x_{\text{start}}[n]\) — the gated version that starts at the origin

**Minimal example:** Suppose \(x[-2] = 7\) and \(x[3] = 7\).
- \(x_{\text{start}}[-2] = 7 \cdot u[-2] = 7 \cdot 0 = 0\)
- \(x_{\text{start}}[3] = 7 \cdot u[3] = 7 \cdot 1 = 7\)

### EXAM TRIGGER
'Make the signal start at the origin' → multiply by \(u[n]\).

#### Common Misuse
Adding \(u[n]\) instead of multiplying by it. Adding shifts values; multiplying gates them.

%%KC_BLOCK%%<div class="kc-visual-meta" data-visual-kind="interactive_demo" data-teaching-role="example_support" data-visual-use-b64="eyJjcmFtIjoiVHJhaW4gdGhlIGVuZHBvaW50IHJ1bGU6IGZpcnN0IGluZGV4IGluY2x1ZGVkLCBzZWNvbmQgaW5kZXggZXhjbHVkZWQuIiwic3RhbmRhcmQiOiJMZXQgc3R1ZGVudHMgZHJhZyBlbmRwb2ludHMgYW5kIHdhdGNoIGhvdyBzaGlmdGVkIHN0ZXBzIGNyZWF0ZSBhIGZpbml0ZS1kdXJhdGlvbiBzZWdtZW50LiIsInRvcF9zY29yZSI6IlVzZSB0aGUgcmFtcCBvdmVybGF5IHRvIHJldmVhbCB3aHkgXFwobih1W25dLXVbbi01XSlcXCkga2VlcHMgb25seSBzYW1wbGVzIFxcKDBcXCkgdGhyb3VnaCBcXCg0XFwpLiJ9" style="display:none;"></div><div class="kc-interactive-demo" data-demo-b64="eyJ0eXBlIjoiaW50ZXJhY3RpdmVfZGVtbyIsImRlbW9fdHlwZSI6InJlYWN0X2NhbnZhc19zdGVtX3Bsb3QiLCJ0aXRsZSI6IlN0ZXAgR2F0ZXMgYW5kIFNoaWZ0ZWQgV2luZG93cyIsInRlYWNoaW5nX3JvbGUiOiJleGFtcGxlX3N1cHBvcnQiLCJtb2RlX3NwZWNpZmljX3Zpc3VhbF91c2UiOnsiY3JhbSI6IlRyYWluIHRoZSBlbmRwb2ludCBydWxlOiBmaXJzdCBpbmRleCBpbmNsdWRlZCwgc2Vjb25kIGluZGV4IGV4Y2x1ZGVkLiIsInN0YW5kYXJkIjoiTGV0IHN0dWRlbnRzIGRyYWcgZW5kcG9pbnRzIGFuZCB3YXRjaCBob3cgc2hpZnRlZCBzdGVwcyBjcmVhdGUgYSBmaW5pdGUtZHVyYXRpb24gc2VnbWVudC4iLCJ0b3Bfc2NvcmUiOiJVc2UgdGhlIHJhbXAgb3ZlcmxheSB0byByZXZlYWwgd2h5IFxcKG4odVtuXS11W24tNV0pXFwpIGtlZXBzIG9ubHkgc2FtcGxlcyBcXCgwXFwpIHRocm91Z2ggXFwoNFxcKS4ifSwic3BlYyI6eyJuX3JhbmdlIjpbLTMsMTNdLCJzbGlkZXJzIjpbeyJpZCI6ImEiLCJsYWJlbCI6ImEiLCJtaW4iOi0yLCJtYXgiOjEyLCJkZWZhdWx0IjoyLCJpbnRlZ2VyX29ubHkiOnRydWV9LHsiaWQiOiJiIiwibGFiZWwiOiJiIiwibWluIjotMiwibWF4IjoxMiwiZGVmYXVsdCI6NywiaW50ZWdlcl9vbmx5Ijp0cnVlLCJjb25zdHJhaW50IjoiYiA+IGEgKGVuZm9yY2VkIGF1dG9tYXRpY2FsbHkpIn1dLCJ0cmFjZXMiOlt7ImlkIjoic3RlcF9hIiwibGFiZWwiOiJ1W24gLSBhXSIsImZvcm11bGEiOiJ1W24gLSBhXSIsImNvbG9yIjoibmF2eSIsImRlZmF1bHRfdmlzaWJsZSI6dHJ1ZX0seyJpZCI6InN0ZXBfYiIsImxhYmVsIjoidVtuIC0gYl0iLCJmb3JtdWxhIjoidVtuIC0gYl0iLCJjb2xvciI6Im11dGVkX3RlYWwiLCJkZWZhdWx0X3Zpc2libGUiOnRydWV9LHsiaWQiOiJ3aW5kb3ciLCJsYWJlbCI6InVbbi1hXSAtIHVbbi1iXSIsImZvcm11bGEiOiJ1W24tYV0gLSB1W24tYl0iLCJjb2xvciI6Im11dGVkX29yYW5nZSIsImRlZmF1bHRfdmlzaWJsZSI6dHJ1ZX1dLCJkeW5hbWljX2xhYmVsIjoidVtuLWFdIC0gdVtuLWJdID0gMSBmb3IgYSDiiaQgbiA8IGIsIGFuZCAwIGVsc2V3aGVyZS4iLCJvdmVybGF5X2NoZWNrYm94Ijp7ImxhYmVsIjoiTXVsdGlwbHkgYnkgc2FtcGxlIHJhbXAgeFtuXSA9IG4iLCJmb3JtdWxhIjoibiAqICh1W24tYV0gLSB1W24tYl0pIiwiY29sb3IiOiJtdXRlZF9yZWQifX19"></div>%%KC_END%%

$$u[n-a]-u[n-b] = \begin{cases}1, & a\le n<b \\ 0, & \text{otherwise}\end{cases}$$
This is the practical window rule used throughout Example 3.3.

**How it works step by step:**
- \(u[n-a]\) turns on at \(n = a\) and stays on forever.
- \(u[n-b]\) turns on at \(n = b\) and stays on forever.
- Subtracting the second from the first cancels the 'on' region starting at \(n = b\), leaving a block of 1s only from \(a\) through \(b-1\).

**Concrete example:** \(u[n-5] - u[n-11]\)
- Equals 1 for \(5 \le n < 11\), meaning samples \(n = 5, 6, 7, 8, 9, 10\).
- Equals 0 for \(n < 5\) and for \(n \ge 11\).

### EXAM TRIGGER
Use this pattern whenever you need to describe a finite segment of a signal using step functions.

#### Common Misuse
Including \(n = b\) in the window. At \(n = b\), both steps equal 1, so their difference is 0 — the window is already closed.

$$x[n] = n\bigl(u[n]-u[n-5]\bigr) + 4\bigl(u[n-5]-u[n-11]\bigr) - 2\delta[n-8]$$
*This single expression describes the entire signal from Example 3.3 for **all** integers \(n\) — no separate case listing needed.

Breaking it into three components:

- **\(n\bigl(u[n]-u[n-5]\bigr)\):** The window \(u[n]-u[n-5]\) is 1 for \(0 \le n < 5\), so this term keeps the ramp samples \(n = 0, 1, 2, 3, 4\) and zeros everything else.

- **\(4\bigl(u[n-5]-u[n-11]\bigr)\):** The window \(u[n-5]-u[n-11]\) is 1 for \(5 \le n < 11\), so this term creates a constant level of 4 at samples \(n = 5, 6, 7, 8, 9, 10\).

- **\(-2\delta[n-8]\):** The impulse \(\delta[n-8]\) equals 1 only at \(n = 8\), so this term subtracts 2 at exactly that one sample — a single-point correction on top of the constant plateau.

#### Common Misuse
Treating the expression as valid only on the plotted interval. The formula is valid for all \(n\); outside the windows and impulse, every term evaluates to zero automatically.*

## How to Build These Expressions Fast

Follow these three steps whenever you need to write an all-\(n\) signal formula:

1. **Identify where each visible piece starts and ends.** Read the signal plot or description and note the start index \(a\) and the last included index for each segment.

2. **Use \(u[n-a]-u[n-b]\) for each finite interval from \(a\) through \(b-1\).** Multiply the window by the signal value or formula active on that interval.

3. **Add impulses only for isolated single-sample corrections.** Use \(c\,\delta[n-k]\) to add or subtract a value \(c\) at exactly one index \(k\).

### COMMON MISTAKE

If you want a constant 4 from \(n=5\) **through** \(n=10\) inclusive, you must write \(4(u[n-5]-u[n-11])\). Writing \(4(u[n-5]-u[n-10])\) stops too early — it covers only \(5 \le n < 10\) and misses \(n=10\).

---
**📌 Key Takeaways**
- Step definition: \(u[n]=\begin{cases}1,&n\ge0\\0,&n<0\end{cases}\) — on at \(n=0\), off before it.
- Start gate: \(x_{\text{start}}[n]=x[n]u[n]\) zeros all samples before the origin, leaves the rest unchanged.
- Finite window: \(u[n-a]-u[n-b]=1\) for \(a\le n<b\); the endpoint \(n=b\) is excluded.
- All-\(n\) example: \(x[n]=n(u[n]-u[n-5])+4(u[n-5]-u[n-11])-2\delta[n-8]\) covers every \(n\) in one formula.

*Next, use these building blocks to describe more discrete-time signal models compactly.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InVuaXRfc3RlcF9kZWZpbml0aW9uIiwibGFiZWwiOiJEaXNjcmV0ZS10aW1lIHVuaXQgc3RlcCBkZWZpbml0aW9uIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AxX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJVc2luZyB0aGUgdGV4dGJvb2sgZGVmaW5pdGlvbiBvZiBcXCh1W25dXFwpLCB3aGF0IGlzIFxcKHVbMF1cXCk/Iiwib3B0aW9ucyI6WyJBLiAwIiwiQi4gMSIsIkMuIFVuZGVmaW5lZCIsIkQuIEl0IGRlcGVuZHMgb24gdGhlIHNpZ25hbCBiZWluZyBtdWx0aXBsaWVkIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiXFwodVtuXT0xXFwpIGZvciBcXChuXFxnZTBcXCksIGFuZCBcXCgwXFwpIHNhdGlzZmllcyBcXChuXFxnZTBcXCkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhpcyB3b3VsZCBiZSB0cnVlIG9ubHkgaWYgdGhlIGRlZmluaXRpb24gdXNlZCBcXChuPjBcXCksIGJ1dCBpdCB1c2VzIFxcKG5cXGdlMFxcKS4iLCJDIjoiVGhlIGRpc2NyZXRlLXRpbWUgZGVmaW5pdGlvbiBoZXJlIGV4cGxpY2l0bHkgaW5jbHVkZXMgXFwobj0wXFwpLiIsIkQiOiJcXCh1WzBdXFwpIGlzIGRlZmluZWQgYmVmb3JlIGFueSBtdWx0aXBsaWNhdGlvbiB3aXRoIGFub3RoZXIgc2lnbmFsLiJ9LCJoaW50IjoiQ2hlY2sgd2hldGhlciB0aGUgaW5lcXVhbGl0eSBpbmNsdWRlcyBlcXVhbGl0eS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDFfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IldoaWNoIHN0YXRlbWVudCBjb3JyZWN0bHkgZGVzY3JpYmVzIFxcKHVbbl1cXCk/Iiwib3B0aW9ucyI6WyJBLiBJdCBpcyAxIGZvciBuZWdhdGl2ZSBcXChuXFwpIGFuZCAwIGZvciBub25uZWdhdGl2ZSBcXChuXFwpLiIsIkIuIEl0IGlzIDAgZm9yIFxcKG48MFxcKSBhbmQgMSBmb3IgXFwoblxcZ2UwXFwpLiIsIkMuIEl0IGlzIDEgb25seSBhdCBcXChuPTBcXCkuIiwiRC4gSXQgaXMgYSBjb250aW51b3VzLXRpbWUgZnVuY3Rpb24gb2YgXFwodFxcKS4iXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJUaGUgZGlzY3JldGUtdGltZSB1bml0IHN0ZXAgaXMgb2ZmIGJlZm9yZSB0aGUgb3JpZ2luIGFuZCBvbiBhdCB0aGUgb3JpZ2luIGFuZCBhZnRlcndhcmQuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhpcyByZXZlcnNlcyB0aGUgb2ZmIGFuZCBvbiByZWdpb25zLiIsIkMiOiJUaGF0IGRlc2NyaWJlcyBhbiBpbXB1bHNlLWxpa2UgYmVoYXZpb3IsIG5vdCBhIHN0ZXAuIiwiRCI6IlRoaXMgc2VjdGlvbiBpcyBhYm91dCBcXCh1W25dXFwpLCB3aGVyZSBcXChuXFwpIGlzIGEgZGlzY3JldGUgaW50ZWdlciBpbmRleC4ifSwiaGludCI6IkEgc3RlcCBzdGF5cyBvbiBhZnRlciBpdCB0dXJucyBvbi4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoic3RhdGljX3N0ZW1fcGxvdCIsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoibXVsdGlwbHlpbmdfYnlfc3RlcCIsImxhYmVsIjoiVXNpbmcgXFwodVtuXVxcKSBhcyBhIHN0YXJ0IGdhdGUiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoibWVkaXVtIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoxfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMl9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiQSBzZXF1ZW5jZSBcXCh4W25dXFwpIHNob3VsZCBiZSBmb3JjZWQgdG8gemVybyBmb3IgYWxsIFxcKG48MFxcKSwgd2hpbGUgc3RheWluZyB1bmNoYW5nZWQgZm9yIFxcKG5cXGdlMFxcKS4gV2hpY2ggZXhwcmVzc2lvbiBkb2VzIHRoYXQ/Iiwib3B0aW9ucyI6WyJBLiBcXCh4W25dK3Vbbl1cXCkiLCJCLiBcXCh4W25ddVtuXVxcKSIsIkMuIFxcKHhbbi11XVxcKSIsIkQuIFxcKHVbbl0teFtuXVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6Ik11bHRpcGxpY2F0aW9uIGJ5IFxcKHVbbl1cXCkga2lsbHMgdGhlIG5lZ2F0aXZlLWluZGV4IHNhbXBsZXMgYW5kIGxlYXZlcyBub25uZWdhdGl2ZSBzYW1wbGVzIHVuY2hhbmdlZC4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJBZGRpbmcgYSBzdGVwIGNoYW5nZXMgdGhlIHZhbHVlcyBhZnRlciBcXChuPTBcXCk7IGl0IGRvZXMgbm90IHNpbXBseSBnYXRlIHRoZSBzaWduYWwuIiwiQyI6IlRoaXMgaXMgbm90IHZhbGlkIG5vdGF0aW9uIGZvciBzaGlmdGluZyBieSB0aGUgc3RlcCBmdW5jdGlvbi4iLCJEIjoiVGhpcyBzdWJ0cmFjdHMgdGhlIHNpZ25hbCBmcm9tIHRoZSBzdGVwIGFuZCBkb2VzIG5vdCBwcmVzZXJ2ZSBcXCh4W25dXFwpLiJ9LCJoaW50IjoiQSBnYXRlIHdvcmtzIGJ5IG11bHRpcGx5aW5nIGJ5IDAgb3IgMS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfV19LHsiaWQiOiJzaGlmdGVkX3N0ZXBfd2luZG93IiwibGFiZWwiOiJTaGlmdGVkIHN0ZXBzIGNyZWF0ZSBmaW5pdGUgd2luZG93cyIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwM19xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiRm9yIHdoaWNoIGludGVnZXIgdmFsdWVzIG9mIFxcKG5cXCkgaXMgXFwodVtuLTVdLXVbbi0xMV1cXCkgZXF1YWwgdG8gMT8iLCJvcHRpb25zIjpbIkEuIFxcKDVcXGxlIG5cXGxlMTFcXCkiLCJCLiBcXCg1XFxsZSBuPDExXFwpIiwiQy4gXFwoNFxcbGUgblxcbGUxMFxcKSIsIkQuIFxcKG48NVxcKSBvciBcXChuXFxnZTExXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiVGhlIGZpcnN0IHN0ZXAgdHVybnMgb24gYXQgNSwgYW5kIHRoZSBzZWNvbmQgc3RlcCBjYW5jZWxzIGl0IHN0YXJ0aW5nIGF0IDExLCBzbyB0aGUgd2luZG93IGlzIFxcKDVcXGxlIG48MTFcXCkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiQXQgXFwobj0xMVxcKSwgYm90aCBzdGVwcyBhcmUgb24sIHNvIHRoZSBkaWZmZXJlbmNlIGlzIDAuIiwiQyI6IlRoZSBmaXJzdCBpbmNsdWRlZCBpbmRleCBpcyA1LCBub3QgNC4iLCJEIjoiT3V0c2lkZSB0aGUgd2luZG93LCB0aGUgZGlmZmVyZW5jZSBpcyAwLCBub3QgMS4ifSwiaGludCI6IlRoZSBzZWNvbmQgc3RlcCBtYXJrcyB0aGUgZmlyc3QgaW5kZXggYWZ0ZXIgdGhlIHdpbmRvdy4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoiaW50ZXJhY3RpdmVfZGVtb19vYnNlcnZhdGlvbiIsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwM19xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiWW91IG5lZWQgYSBjb25zdGFudCB2YWx1ZSA0IGZyb20gXFwobj01XFwpIHRocm91Z2ggXFwobj0xMFxcKSwgaW5jbHVzaXZlLiBXaGljaCBzdGVwIGV4cHJlc3Npb24gaXMgY29ycmVjdD8iLCJvcHRpb25zIjpbIkEuIFxcKDQodVtuLTVdLXVbbi0xMF0pXFwpIiwiQi4gXFwoNCh1W24tNV0tdVtuLTExXSlcXCkiLCJDLiBcXCg0KHVbbi00XS11W24tMTBdKVxcKSIsIkQuIFxcKDR1W24tMTBdXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiVG8gaW5jbHVkZSBzYW1wbGVzIDUgdGhyb3VnaCAxMCwgdGhlIGNhbmNlbGxhdGlvbiBtdXN0IGJlZ2luIGF0IDExLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoaXMgY292ZXJzIFxcKDVcXGxlIG48MTBcXCksIHNvIGl0IG1pc3NlcyBcXChuPTEwXFwpLiIsIkMiOiJUaGlzIHN0YXJ0cyB0b28gZWFybHkgYXQgXFwobj00XFwpLiIsIkQiOiJUaGlzIHR1cm5zIG9uIGF0IDEwIGFuZCBzdGF5cyBvbiBmb3JldmVyOyBpdCBpcyBub3QgYSBmaW5pdGUgc2VnbWVudCBmcm9tIDUgdG8gMTAuIn0sImhpbnQiOiJGb3IgYW4gaW5jbHVzaXZlIGVuZGluZyBpbmRleCAxMCwgdXNlIHRoZSBuZXh0IGluZGV4LCAxMSwgaW4gdGhlIHN1YnRyYWN0aW5nIHN0ZXAuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6Indyb25nX3ZzX3JpZ2h0X3Zpc3VhbF9jaGVjayIsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoiYWxsX25fc2lnbmFsX2V4cHJlc3Npb24iLCJsYWJlbCI6IkRlc2NyaWJpbmcgYSBzaWduYWwgd2l0aCBzdGVwcyBhbmQgaW1wdWxzZXMiLCJpbXBvcnRhbmNlIjoibWVkaXVtIiwiZXhhbV93ZWlnaHQiOiJtZWRpdW0iLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjF9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3A0X3ExIiwidHlwZSI6InNob3J0X2Fuc3dlciIsInN0ZW0iOiJJbiB0aGUgZXhwcmVzc2lvbiBcXCh4W25dPW4odVtuXS11W24tNV0pKzQodVtuLTVdLXVbbi0xMV0pLTJcXGRlbHRhW24tOF1cXCksIGV4cGxhaW4gdGhlIGpvYiBvZiBlYWNoIG9mIHRoZSB0aHJlZSB0ZXJtcy4iLCJpZGVhbF9hbnN3ZXIiOiJUaGUgZmlyc3QgdGVybSBrZWVwcyB0aGUgcmFtcCBcXChuXFwpIGZyb20gXFwobj0wXFwpIHRocm91Z2ggXFwoNFxcKS4gVGhlIHNlY29uZCB0ZXJtIGNyZWF0ZXMgYSBjb25zdGFudCB2YWx1ZSA0IGZyb20gXFwobj01XFwpIHRocm91Z2ggXFwoMTBcXCkuIFRoZSBpbXB1bHNlIHRlcm0gc3VidHJhY3RzIDIgYXQgXFwobj04XFwpLCBjcmVhdGluZyB0aGUgbmVnYXRpdmUgc3Bpa2UgY29ycmVjdGlvbi4iLCJncmFkaW5nX3J1YnJpYyI6WyJNdXN0IGlkZW50aWZ5IHRoZSByYW1wIGludGVydmFsIGFzIFxcKDBcXCkgdGhyb3VnaCBcXCg0XFwpIiwiTXVzdCBpZGVudGlmeSB0aGUgY29uc3RhbnQgaW50ZXJ2YWwgYXMgXFwoNVxcKSB0aHJvdWdoIFxcKDEwXFwpIiwiTXVzdCBzdGF0ZSB0aGF0IFxcKC0yXFxkZWx0YVtuLThdXFwpIGFmZmVjdHMgb25seSBcXChuPThcXCkiLCJNdXN0IGRlc2NyaWJlIHRoZSBmb3JtdWxhIGFzIHZhbGlkIGZvciBhbGwgXFwoblxcKSwgbm90IG9ubHkgb25lIGludGVydmFsIl0sImV4cGxhbmF0aW9uIjoiVGhpcyBjaGVja3Mgd2hldGhlciB0aGUgc3R1ZGVudCBjYW4gcmVhZCBhbiBhbGwtXFwoblxcKSBleHByZXNzaW9uIGFzIHNlcGFyYXRlIHNpZ25hbC1idWlsZGluZyBjb21wb25lbnRzLiIsImhpbnQiOiJSZWFkIGV2ZXJ5IHN0ZXAgZGlmZmVyZW5jZSBhcyBhIHdpbmRvdywgdGhlbiByZWFkIFxcKFxcZGVsdGFbbi04XVxcKSBhcyBhIG9uZS1zYW1wbGUgY29ycmVjdGlvbi4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoiY29tcG9uZW50X2RlY29tcG9zaXRpb25fY2hlY2siLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfV19XX0=" style="display:none;"></div>%%KC_END%%
