%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6ImdlbmVyYXRlZF9pbWFnZSIsInJhdGlvbmFsZSI6IlRoaXMgc2VjdGlvbiBpcyBhbGdlYnJhLWhlYXZ5IGFuZCB0aGUgdGV4dGJvb2sgcGFnZXMgY29udGFpbiBubyBleHRyYWN0ZWQgZmlndXJlcy4gQ2xlYW4gZ2VuZXJhdGVkIHZpc3VhbHMgYXJlIHRoZSBiZXN0IHdheSB0byBzaG93IHRoZSBjb3Zlci11cCBwYXR0ZXJuLCB0aGUgc3Vic3RpdHV0aW9uIHdvcmtmbG93LCBhbmQgdGhlIGRlY2lzaW9uIHRyZWUgZm9yIHdoZW4gdGhlIHNob3J0Y3V0IHdvcmtzLiIsImNyYW0iOiJVc2UgdmlzdWFscyBhcyByZWNvZ25pdGlvbiB0b29sczogaWRlbnRpZnkgZGVub21pbmF0b3IgcGF0dGVybiwgY292ZXIgb25lIGZhY3RvciwgcGx1ZyBpbiBpdHMgcm9vdCwgYW5kIG1vdmUgb24uIiwic3RhbmRhcmQiOiJVc2UgdmlzdWFscyB0byBzaG93IHdoeSBhbGwgb3RoZXIgdGVybXMgdmFuaXNoIGFmdGVyIG11bHRpcGx5aW5nIGJ5IG9uZSBmYWN0b3IgYW5kIHN1YnN0aXR1dGluZyB0aGUgbWF0Y2hpbmcgcm9vdC4iLCJ0b3Bfc2NvcmUiOiJVc2UgdmlzdWFscyB0byBkaXN0aW5ndWlzaCBkaXN0aW5jdCBsaW5lYXIgZmFjdG9ycyBmcm9tIHJlcGVhdGVkIG9yIHF1YWRyYXRpYyBjYXNlcyBhbmQgdG8gZXhwb3NlIHdoZW4gdGhlIHNob3J0Y3V0IG11c3QgYmUgbW9kaWZpZWQuIn0=" style="display:none;"></div>%%KC_END%%
# B.5-2 Heaviside Cover-Up Method

> **Section Objective:** Identify when the cover-up shortcut applies, extract partial-fraction coefficients in seconds, and avoid misuse on repeated or quadratic factors.

When a rational function has **distinct linear factors** in the denominator, the fastest exam move is the Heaviside cover-up method: cover one factor, substitute its root into what remains, and read off the coefficient immediately. No system of equations. No full expansion.

This section tests three things: recognizing when cover-up works, computing coefficients for terms like \(A/(x+1)\), \(B/(x-2)\), \(C/(x+3)\), and knowing when the shortcut breaks down.

> **Memorize this:** distinct linear factor → cover it up → plug in its root.


## 1. Fast Rule for Distinct Linear Factors

If a rational function has the form

$$F(x) = \frac{P(x)}{(x-\lambda_1)(x-\lambda_2)\cdots(x-\lambda_n)}$$

and the partial-fraction expansion contains a term \(k_r/(x-\lambda_r)\), then the coefficient \(k_r\) is found by multiplying both sides by \((x-\lambda_r)\) and substituting \(x = \lambda_r\).

**Why it is fast:** after multiplying by \((x-\lambda_r)\) and setting \(x = \lambda_r\), every other partial-fraction term still carries a factor \((x-\lambda_r)\) in its numerator, so those terms all vanish. Only the \(k_r\) term survives.

### ANSWER-FRAMING SCRIPT

Coefficient of \(1/(x-a)\): cover \((x-a)\) in the denominator, then substitute \(x = a\) into what remains.

#### Trap

This rule requires the denominator factors to be **distinct**. Repeated factors are not a one-shot cover-up case.

$$k_r = \left.(x-\lambda_r)F(x)\right|_{x=\lambda_r}, \qquad r=1,2,\dots,n$$
*This formula gives the coefficient \(k_r\) of the partial-fraction term whose denominator is \((x - \lambda_r)\): multiply \(F(x)\) by that same factor, then evaluate the result at the matching root \(x = \lambda_r\).*

## 2. Exam-Speed Example

Decompose \(F(x) = \dfrac{2x^2+9x-11}{(x+1)(x-2)(x+3)}\) into \(\dfrac{k_1}{x+1}+\dfrac{k_2}{x-2}+\dfrac{k_3}{x+3}\).

**One coefficient at a time; do not expand the whole identity unless forced.**

- **\(k_1\):** Cover \((x+1)\), substitute \(x = -1\):
$$k_1 = \frac{2(-1)^2+9(-1)-11}{(-1-2)(-1+3)} = \frac{2-9-11}{(-3)(2)} = \frac{-18}{-6} = 3$$

- **\(k_2\):** Cover \((x-2)\), substitute \(x = 2\):
$$k_2 = \frac{2(4)+9(2)-11}{(2+1)(2+3)} = \frac{15}{15} = 1$$

- **\(k_3\):** Cover \((x+3)\), substitute \(x = -3\):
$$k_3 = \frac{2(9)+9(-3)-11}{(-3+1)(-3-2)} = \frac{18-27-11}{(-2)(-5)} = \frac{-20}{10} = -2$$

#### Warning

Never substitute the root into an expression that still contains the matching zero factor — that creates division by zero.

$$\frac{2x^2+9x-11}{(x+1)(x-2)(x+3)} = \frac{3}{x+1} + \frac{1}{x-2} - \frac{2}{x+3}$$
*This is the finished partial-fraction decomposition obtained by three direct cover-up substitutions, one for each distinct linear factor.*

## 3. Where Students Misuse Cover-Up

Know these three cases before the exam.

**Case 1 — Complex-conjugate linear factors:** Cover-up still works in principle. For a rational function with real coefficients, the two conjugate factors \((x - \alpha - j\beta)\) and \((x - \alpha + j\beta)\) produce coefficients that are complex conjugates of each other. Compute one by cover-up and infer the other.

**Case 2 — Real quadratic block required:** If the answer must be expressed over a real quadratic \((x^2 + bx + c)\), combine the conjugate pair into a single term \((c_1 x + c_2)/(x^2+bx+c)\). Use quick substitutions or match the highest-power behavior to find \(c_1\) and \(c_2\).

**Case 3 — Repeated factors:** A denominator like \((x-a)^2\) is **not** a direct one-shot cover-up case. The repeated-factor terms require extra derivative-based work.

### FAST RECOGNITION CHECKLIST

> - Distinct linear factors → direct cover-up
> - Quadratic block → cover-up plus cleanup
> - Repeated factor → not the basic shortcut

%%KC_BLOCK%%<div class="kc-visual-meta" data-visual-kind="generate_image" data-teaching-role="trap_exposure" data-visual-use-b64="eyJjcmFtIjoiVXNlIHRoaXMgYXMgYSBxdWljayB5ZXMtbm8gZGVjaXNpb24gbWFwIGJlZm9yZSBzb2x2aW5nLiIsInN0YW5kYXJkIjoiVXNlIHRoaXMgdG8gb3JnYW5pemUgdGhlIHRocmVlIGRlbm9taW5hdG9yIGNhc2VzIGNsZWFybHkuIiwidG9wX3Njb3JlIjoiVXNlIHRoaXMgdG8gaGlnaGxpZ2h0IHRoZSBib3VuZGFyeSBiZXR3ZWVuIGRpcmVjdCBjb3Zlci11cCBhbmQgZm9sbG93LXVwIGNvZWZmaWNpZW50IHdvcmsuIn0=" style="display:none;"></div>%%KC_END%%
*🎨 Decision tree: three denominator structures and whether direct cover-up applies. The red branch marks where the basic shortcut breaks down.*
![Illustration](/generated/gptimage2-1777217502862-2548.png)

---
**📌 Key Takeaways**
- Distinct linear factors in the denominator: cover one factor, substitute its root, read off the coefficient directly.
- Each cover-up substitution zeroes out all other partial-fraction terms, isolating exactly one coefficient per step.
- Trap: repeated factors and irreducible quadratics are not direct one-shot cover-up cases — extra work is required.

*In the next section we will handle repeated factors, where the shortcut needs an extra derivative step.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6ImRpcmVjdF9hcHBsaWNhYmlsaXR5IiwibGFiZWwiOiJSZWNvZ25pemUgd2hlbiBkaXJlY3QgY292ZXItdXAgYXBwbGllcyIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMV9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiRm9yIHdoaWNoIGRlbm9taW5hdG9yIGRvZXMgdGhlIGJhc2ljIEhlYXZpc2lkZSBjb3Zlci11cCBtZXRob2Qgd29yayBkaXJlY3RseSwgd2l0aCBvbmUgc3Vic3RpdHV0aW9uIHBlciBjb2VmZmljaWVudD8iLCJvcHRpb25zIjpbIkEuIFxcKCh4LTEpKHgrMikoeC00KVxcKSIsIkIuIFxcKCh4LTEpXjIoeCsyKVxcKSIsIkMuIFxcKCh4XjIrMSkoeCsyKVxcKSIsIkQuIFxcKCh4XjIrNCleMlxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IlRoZSBiYXNpYyBzaG9ydGN1dCB3b3JrcyBkaXJlY3RseSB3aGVuIHRoZSBkZW5vbWluYXRvciBzcGxpdHMgaW50byBkaXN0aW5jdCBsaW5lYXIgZmFjdG9ycy4gVGhlbiBlYWNoIGNvZWZmaWNpZW50IGlzIGZvdW5kIGJ5IGNvdmVyaW5nIG9uZSBmYWN0b3IgYW5kIHN1YnN0aXR1dGluZyBpdHMgcm9vdC4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJBIHJlcGVhdGVkIGZhY3RvciBicmVha3MgdGhlIG9uZS1zaG90IHNob3J0Y3V0IGZvciB0aGF0IHJlcGVhdGVkIHBhcnQuIiwiQyI6IlRoZSBpcnJlZHVjaWJsZSBxdWFkcmF0aWMgcGFydCBkb2VzIG5vdCBnaXZlIGFsbCBjb2VmZmljaWVudHMgYnkgb25lIGRpcmVjdCBjb3Zlci11cCBzdGVwIGFsb25lLiIsIkQiOiJBIHJlcGVhdGVkIHF1YWRyYXRpYyBmYWN0b3IgaXMgZXZlbiBmYXJ0aGVyIGZyb20gdGhlIGJhc2ljIGRpc3RpbmN0LWxpbmVhciBjYXNlLiJ9LCJoaW50IjoiTG9vayBmb3IgZGlzdGluY3QsIG5vbi1yZXBlYXRlZCBsaW5lYXIgZmFjdG9ycyBvbmx5LiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJkZWNpc2lvbl90cmVlX2dlbmVyYXRlZCIsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwMV9xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiQSBzdHVkZW50IHNheXMsICdJZiBJIHNlZSBhbnkgZmFjdG9yaXplZCBkZW5vbWluYXRvciwgSSBjYW4gYWx3YXlzIHVzZSBkaXJlY3QgY292ZXItdXAgZm9yIGV2ZXJ5IGNvZWZmaWNpZW50LicgV2hhdCBpcyB0aGUgYmVzdCBjb3JyZWN0aW9uPyIsIm9wdGlvbnMiOlsiQS4gQ29ycmVjdDsgZmFjdG9yaXphdGlvbiBhbG9uZSBpcyBlbm91Z2giLCJCLiBDb3JyZWN0IG9ubHkgd2hlbiBhbGwgY29lZmZpY2llbnRzIGFyZSBpbnRlZ2VycyIsIkMuIEluY29ycmVjdDsgZGlyZWN0IGNvdmVyLXVwIGlzIHRoZSBjbGVhbiBzaG9ydGN1dCBmb3IgZGlzdGluY3QgbGluZWFyIGZhY3RvcnMsIHdoaWxlIHJlcGVhdGVkIG9yIHF1YWRyYXRpYyBjYXNlcyBuZWVkIGV4dHJhIHdvcmsiLCJELiBJbmNvcnJlY3Q7IGNvdmVyLXVwIGlzIG5ldmVyIHZhbGlkIGluIHBhcnRpYWwgZnJhY3Rpb25zIl0sImNvcnJlY3Rfb3B0aW9uIjoiQyIsImV4cGxhbmF0aW9uIjoiVGhpcyBpcyB0aGUgY29yZSBleGFtIGRpc3RpbmN0aW9uLiBEaXN0aW5jdCBsaW5lYXIgZmFjdG9ycyBnaXZlIHRoZSBmYXN0ZXN0IGRpcmVjdCBzdWJzdGl0dXRpb24gcnVsZS4gT3RoZXIgc3RydWN0dXJlcyBtYXkgc3RpbGwgdXNlIGNvdmVyLXVwIHBhcnRseSwgYnV0IG5vdCBhcyB0aGUgZnVsbCBvbmUtc3RlcCBtZXRob2QuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhpcyBpZ25vcmVzIHJlcGVhdGVkIGFuZCBxdWFkcmF0aWMtZmFjdG9yIGV4Y2VwdGlvbnMuIiwiQiI6IkludGVnZXIgY29lZmZpY2llbnRzIGFyZSBpcnJlbGV2YW50IHRvIHRoZSB2YWxpZGl0eSBydWxlLiIsIkQiOiJDb3Zlci11cCBpcyBhYnNvbHV0ZWx5IHZhbGlkIGluIHRoZSBwcm9wZXIgY2FzZXMuIn0sImhpbnQiOiJUaGUgaXNzdWUgaXMgZGVub21pbmF0b3Igc3RydWN0dXJlLCBub3QgdGhlIHNpemUgb3IgdHlwZSBvZiBjb2VmZmljaWVudHMuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJjb2VmZmljaWVudF9leHRyYWN0aW9uIiwibGFiZWwiOiJDb21wdXRlIGNvZWZmaWNpZW50cyBieSBjb3ZlcmluZyB0aGUgbWF0Y2hpbmcgZmFjdG9yIGFuZCBzdWJzdGl0dXRpbmcgdGhlIHJvb3QiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDJfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkxldCBcXChGKHgpID0gXFxkZnJhY3syeF4yKzl4LTExfXsoeCsxKSh4LTIpKHgrMyl9XFwpIGFuZCB3cml0ZSBcXChGKHgpID0gXFxkZnJhY3trXzF9e3grMX0rXFxkZnJhY3trXzJ9e3gtMn0rXFxkZnJhY3trXzN9e3grM31cXCkuIFdoYXQgaXMgXFwoa18yXFwpPyIsIm9wdGlvbnMiOlsiQS4gXFwoLTJcXCkiLCJCLiBcXCgwXFwpIiwiQy4gXFwoMVxcKSIsIkQuIFxcKDNcXCkiXSwiY29ycmVjdF9vcHRpb24iOiJDIiwiZXhwbGFuYXRpb24iOiJDb3ZlciBcXCgoeC0yKVxcKSwgdGhlbiBzdWJzdGl0dXRlIFxcKHg9MlxcKSBpbnRvIHRoZSByZW1haW5pbmcgZXhwcmVzc2lvbjogXFwoXFxkZnJhY3syKDIpXjIrOSgyKS0xMX17KDIrMSkoMiszKX0gPSBcXGRmcmFjezE1fXsxNX0gPSAxXFwpLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoYXQgaXMgXFwoa18zXFwpLCBub3QgXFwoa18yXFwpLiIsIkIiOiJOb3RoaW5nIGhlcmUgZm9yY2VzIHRoZSBjb2VmZmljaWVudCB0byB2YW5pc2guIiwiRCI6IlRoYXQgaXMgXFwoa18xXFwpLCBub3QgXFwoa18yXFwpLiJ9LCJoaW50IjoiRm9yIFxcKGtfMlxcKSwgdXNlIHRoZSByb290IG9mIFxcKHgtMlxcKSwgbmFtZWx5IFxcKHg9MlxcKS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDJfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IldoaWNoIHByb2NlZHVyZSBjb3JyZWN0bHkgZmluZHMgdGhlIGNvZWZmaWNpZW50IG9mIFxcKDEvKHgtYSlcXCkgaW4gYSBkaXN0aW5jdC1saW5lYXItZmFjdG9yIHBhcnRpYWwgZnJhY3Rpb24gZXhwYW5zaW9uPyIsIm9wdGlvbnMiOlsiQS4gU3Vic3RpdHV0ZSBcXCh4PWFcXCkgaW50byB0aGUgb3JpZ2luYWwgZnVuY3Rpb24gaW1tZWRpYXRlbHkiLCJCLiBDb3ZlciBcXCgoeC1hKVxcKSwgZXZhbHVhdGUgdGhlIHJlbWFpbmluZyBleHByZXNzaW9uIGF0IFxcKHg9YVxcKSIsIkMuIERpZmZlcmVudGlhdGUgdGhlIGRlbm9taW5hdG9yIGFuZCBzdWJzdGl0dXRlIFxcKHg9YVxcKSIsIkQuIEV4cGFuZCBhbGwgZmFjdG9ycyBmaXJzdCwgdGhlbiBjb21wYXJlIGNvbnN0YW50cyBvbmx5Il0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiWW91IG11c3QgZmlyc3QgcmVtb3ZlIHRoZSBtYXRjaGluZyB6ZXJvIGZhY3RvciBjb25jZXB0dWFsbHkgYnkgbXVsdGlwbHlpbmcgYnkgXFwoKHgtYSlcXCksIHdoaWNoIHRoZSBjb3Zlci11cCBzdGVwIHJlcHJlc2VudHMsIGFuZCBvbmx5IHRoZW4gc3Vic3RpdHV0ZSBcXCh4PWFcXCkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiRGlyZWN0IHN1YnN0aXR1dGlvbiBpbnRvIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiB1c3VhbGx5IGNyZWF0ZXMgZGl2aXNpb24gYnkgemVyby4iLCJDIjoiVGhhdCBpcyBub3QgdGhlIGJhc2ljIHRleHRib29rIHJ1bGUgaGVyZS4iLCJEIjoiVGhhdCBpcyBzbG93ZXIgYW5kIGRlZmVhdHMgdGhlIHB1cnBvc2Ugb2YgdGhlIHNob3J0Y3V0LiJ9LCJoaW50IjoiQXZvaWQgcGx1Z2dpbmcgaW50byBhbiBleHByZXNzaW9uIHRoYXQgc3RpbGwgY29udGFpbnMgdGhlIHplcm8gZGVub21pbmF0b3IgZmFjdG9yLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwMl9xMyIsInR5cGUiOiJzaG9ydF9hbnN3ZXIiLCJzdGVtIjoiSW4gb25lIG9yIHR3byBzZW50ZW5jZXMsIGV4cGxhaW4gd2h5IHN1YnN0aXR1dGluZyBcXCh4PWFcXCkgYWZ0ZXIgY292ZXJpbmcgXFwoKHgtYSlcXCkgaXNvbGF0ZXMgdGhlIGNvZWZmaWNpZW50IG9mIFxcKDEvKHgtYSlcXCkuIiwiaWRlYWxfYW5zd2VyIjoiQWZ0ZXIgbXVsdGlwbHlpbmcgYnkgb3IgY292ZXJpbmcgdGhlIGZhY3RvciBcXCgoeC1hKVxcKSwgdGhlIHRlcm0gd2l0aCBkZW5vbWluYXRvciBcXCh4LWFcXCkgYmVjb21lcyBqdXN0IGl0cyBjb2VmZmljaWVudC4gV2hlbiBcXCh4PWFcXCkgaXMgc3Vic3RpdHV0ZWQsIGV2ZXJ5IG90aGVyIHBhcnRpYWwtZnJhY3Rpb24gdGVybSBzdGlsbCBjb250YWlucyBhIGZhY3RvciBcXCgoeC1hKVxcKSBpbiBpdHMgbnVtZXJhdG9yLCBzbyB0aG9zZSB0ZXJtcyBiZWNvbWUgemVyby4iLCJncmFkaW5nX3J1YnJpYyI6WyJNdXN0IHNheSB0aGUgbWF0Y2hpbmcgdGVybSByZWR1Y2VzIHRvIGl0cyBjb2VmZmljaWVudCIsIk11c3Qgc2F5IHRoZSBvdGhlciB0ZXJtcyB2YW5pc2ggd2hlbiBcXCh4PWFcXCkgaXMgc3Vic3RpdHV0ZWQiLCJNdXN0IGNvbm5lY3QgdGhlIHplcm9pbmcgdG8gdGhlIGZhY3RvciBcXCgoeC1hKVxcKSJdLCJleHBsYW5hdGlvbiI6IlRoaXMgY2hlY2tzIHdoZXRoZXIgdGhlIHN0dWRlbnQgdW5kZXJzdGFuZHMgdGhlIG1lY2hhbmlzbSwgbm90IGp1c3QgdGhlIGJ1dHRvbi1wdXNoaW5nIHJvdXRpbmUuIiwiaGludCI6IlRoaW5rOiBvbmUgdGVybSBzdXJ2aXZlcywgdGhlIHJlc3QgZGllIGF0IFxcKHg9YVxcKS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfV19LHsiaWQiOiJleHRlbnNpb25zX2FuZF90cmFwcyIsImxhYmVsIjoiSGFuZGxlIGNvbXBsZXgsIHF1YWRyYXRpYywgYW5kIHJlcGVhdGVkLWZhY3RvciBleHRlbnNpb25zIHdpdGhvdXQgb3ZlcnVzaW5nIHRoZSBzaG9ydGN1dCIsImltcG9ydGFuY2UiOiJtZWRpdW0iLCJleGFtX3dlaWdodCI6Im1lZGl1bSIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6MX0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDNfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IldoaWNoIHN0YXRlbWVudCBpcyBjb3JyZWN0IGFib3V0IGEgcmF0aW9uYWwgZnVuY3Rpb24gd2l0aCByZWFsIGNvZWZmaWNpZW50cyBhbmQgZGVub21pbmF0b3IgZmFjdG9ycyBcXCgoeCsxKSh4KzItajMpKHgrMitqMylcXCk/Iiwib3B0aW9ucyI6WyJBLiBUaGUgY29lZmZpY2llbnRzIGZvciB0aGUgY29uanVnYXRlIGxpbmVhciBmYWN0b3JzIGFyZSB1bnJlbGF0ZWQiLCJCLiBUaGUgY29lZmZpY2llbnRzIGZvciB0aGUgY29uanVnYXRlIGxpbmVhciBmYWN0b3JzIGFyZSBhbHNvIGNvbmp1Z2F0ZXMgb2YgZWFjaCBvdGhlciIsIkMuIENvdmVyLXVwIGNhbm5vdCBiZSB1c2VkIGF0IGFsbCBiZWNhdXNlIHRoZSBmYWN0b3JzIGFyZSBjb21wbGV4IiwiRC4gVGhlIGFuc3dlciBtdXN0IHN0YXkgaW4gdGhyZWUgdW5yZWxhdGVkIHJlYWwgbGluZWFyIHRlcm1zIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiRm9yIHJhdGlvbmFsIGZ1bmN0aW9ucyB3aXRoIHJlYWwgY29lZmZpY2llbnRzLCBjb25qdWdhdGUgZmFjdG9ycyBwcm9kdWNlIGNvbmp1Z2F0ZSBjb2VmZmljaWVudHMuIFlvdSBjYW4gb2Z0ZW4gY29tcHV0ZSBvbmUgYnkgY292ZXItdXAgYW5kIGluZmVyIHRoZSBvdGhlci4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGlzIG1pc3NlcyB0aGUgY29uanVnYXRlIHN5bW1ldHJ5IHRoYXQgcmVhbCBjb2VmZmljaWVudHMgZW5mb3JjZS4iLCJDIjoiVGhlIG1ldGhvZCBzdGlsbCB3b3JrcyBpbiBwcmluY2lwbGUgZm9yIGNvbXBsZXggbGluZWFyIGZhY3RvcnMuIiwiRCI6IlRoZSBjb25qdWdhdGUgcGFpciBpcyBvZnRlbiByZWNvbWJpbmVkIGludG8gYSByZWFsIHF1YWRyYXRpYyB0ZXJtLiJ9LCJoaW50IjoiUmVhbCBjb2VmZmljaWVudHMgdXN1YWxseSBmb3JjZSBjb25qdWdhdGUgc3ltbWV0cnkgb24gdGhlIHBhcnRpYWwtZnJhY3Rpb24gY29lZmZpY2llbnRzLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9XX1dfQ==" style="display:none;"></div>%%KC_END%%
