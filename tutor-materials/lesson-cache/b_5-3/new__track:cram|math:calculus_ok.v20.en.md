%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6ImdlbmVyYXRlZF9pbWFnZSIsInJhdGlvbmFsZSI6IlRoaXMgc2VjdGlvbiBpcyBtYXRoLWhlYXZ5IGFuZCBoYXMgbm8gZXh0cmFjdGVkIHRleHRib29rIGZpZ3VyZXMuIEEgY2xlYW4gZ2VuZXJhdGVkIHZpc3VhbCBpcyB0aGUgYmVzdCB3YXkgdG8gc2hvdyB0aGUgcmVwZWF0ZWQtZmFjdG9yIHRlbXBsYXRlIGFuZCB0aGUgY29lZmZpY2llbnQtZmluZGluZyB3b3JrZmxvdyB3aXRob3V0IHBhZ2UgY2x1dHRlci4iLCJjcmFtIjoiVXNlIHZpc3VhbHMgdG8gaGVscCB0aGUgc3R1ZGVudCBzcG90IHRoZSByZXBlYXRlZC1mYWN0b3IgdGVtcGxhdGUgaW5zdGFudGx5IGFuZCByZW1lbWJlciB3aGljaCBjb2VmZmljaWVudCBjb21lcyBmcm9tIHZhbHVlLCBmaXJzdCBkZXJpdmF0aXZlLCBhbmQgc2Vjb25kIGRlcml2YXRpdmUuIiwic3RhbmRhcmQiOiJVc2UgdmlzdWFscyB0byBzaG93IHRoZSBleHBhbnNpb24gc3RydWN0dXJlIGNsZWFybHkgYW5kIGNvbm5lY3QgZWFjaCBjb2VmZmljaWVudCB0byBvbmUgY29uY3JldGUgb3BlcmF0aW9uIG9uIHRoZSBjb25jZWFsZWQgZXhwcmVzc2lvbi4iLCJ0b3Bfc2NvcmUiOiJVc2UgdmlzdWFscyB0byBleHBvc2UgaW5kZXhpbmcgZGV0YWlscywgZmFjdG9yaWFsIHNjYWxpbmcsIGFuZCB0aGUgdHJhcCBvZiBtaXhpbmcgcmVwZWF0ZWQtZmFjdG9yIGNvZWZmaWNpZW50cyB3aXRoIG9yZGluYXJ5IEhlYXZpc2lkZSBjb2VmZmljaWVudHMuIn0=" style="display:none;"></div>%%KC_END%%
# B.5-3 Repeated Factors of Q(x)

> **Objective:** Recognize the repeated-factor template instantly, write every required term, and extract coefficients using cover-up plus derivatives — without losing points to common indexing errors.

Consider \(\dfrac{1}{(x+1)^3(x+2)}\). The factor \((x+1)^3\) is repeated with order 3, so it forces **three** stacked partial-fraction terms, not one. The general rule: a factor \((x-\lambda)^r\) always produces exactly \(r\) terms, with denominators \((x-\lambda)^r, (x-\lambda)^{r-1}, \ldots, (x-\lambda)^1\).

The two highest-frequency exam errors are: (1) forgetting intermediate powers — writing only the top and bottom terms and skipping the middle — and (2) applying ordinary Heaviside cover-up to every coefficient, which only works for unrepeated factors. Repeated-factor coefficients beyond \(a_0\) require differentiation of the concealed expression.

%%KC_BLOCK%%<div class="kc-visual-meta" data-visual-kind="generate_image" data-teaching-role="exam_pattern_anchor" data-visual-use-b64="eyJjcmFtIjoiVXNlIHRoaXMgdG8gbWVtb3JpemUgdGhlIHJlcGVhdGVkLWZhY3RvciBleHBhbnNpb24gcGF0dGVybiBpbiBvbmUgZ2xhbmNlLiIsInN0YW5kYXJkIjoiVXNlIHRoaXMgdG8gY29ubmVjdCBkZW5vbWluYXRvciBzdHJ1Y3R1cmUgdG8gdGhlIGZ1bGwgcGFydGlhbC1mcmFjdGlvbiB0ZW1wbGF0ZS4iLCJ0b3Bfc2NvcmUiOiJVc2UgdGhpcyB0byBub3RpY2UgaW5kZXhpbmcgYW5kIGNvZWZmaWNpZW50IHBsYWNlbWVudCBwcmVjaXNlbHkuIn0=" style="display:none;"></div>%%KC_END%%
*🎨 A repeated factor \((x-\lambda)^r\) expands into \(r\) stacked terms. Every intermediate power must appear.*
![Illustration](/generated/gptimage2-1777215523943-9333.png)

$$F(x)=\frac{P(x)}{(x-\lambda)^r(x-\alpha_1)(x-\alpha_2)\cdots(x-\alpha_j)}=\frac{a_0}{(x-\lambda)^r}+\frac{a_1}{(x-\lambda)^{r-1}}+\cdots+\frac{a_{r-1}}{x-\lambda}+\frac{k_1}{x-\alpha_1}+\cdots+\frac{k_j}{x-\alpha_j}$$
*One repeated factor of order \(r\) generates exactly \(r\) partial-fraction terms (one per power from \(r\) down to 1), while each unrepeated linear factor \((x-\alpha_i)\) still contributes only a single term \(k_i/(x-\alpha_i)\).*

## 1. Fast Coefficient Rules for Repeated Factors

Once you have written the full template, extract coefficients in this order:

1. **Write every term.** For a factor \((x-\lambda)^r\), list all \(r\) stacked terms before doing any arithmetic.
2. **Cover-up for unrepeated factors.** Apply ordinary Heaviside cover-up at each root \(\alpha_i\) to get \(k_i\) directly.
3. **Conceal the repeated factor.** Define \(G(x) = (x-\lambda)^r F(x)\), which removes the entire repeated-factor block from the denominator.
4. **Evaluate at the repeated root for \(a_0\).** Set \(x = \lambda\) in \(G(x)\): \(a_0 = G(\lambda)\).
5. **Differentiate once and evaluate for \(a_1\).** \(a_1 = G'(\lambda)\).
6. **Continue with higher derivatives.** Each successive coefficient requires one more derivative: \(a_j = \dfrac{1}{j!}G^{(j)}(\lambda)\).

### COMMON TRAPS

- **Missing a term:** skipping \((x-\lambda)^{r-1}\) or any intermediate power.
- **Wrong expression:** differentiating the original \(F(x)\) instead of the concealed \(G(x)\).
- **Forgotten factorial:** writing \(G''(\lambda)\) instead of \(\dfrac{1}{2!}G''(\lambda)\) for \(a_2\).

$$a_j=\left.\frac{1}{j!}\frac{d^j}{dx^j}\left[(x-\lambda)^rF(x)\right]\right|_{x=\lambda}$$
*After concealing the repeated factor by forming \(G(x) = (x-\lambda)^r F(x)\), the coefficient \(a_j\) is obtained by taking the \(j\)th derivative of \(G(x)\) and evaluating at \(x = \lambda\), with the \(j!\) in the denominator correcting for the factorial growth introduced by repeated differentiation.*

%%KC_BLOCK%%<div class="kc-visual-meta" data-visual-kind="generate_image" data-teaching-role="concept_anchor" data-visual-use-b64="eyJjcmFtIjoiVXNlIHRoaXMgYXMgYSBzb2x2ZS1vcmRlciBjaGVja2xpc3QgdW5kZXIgdGltZWQgY29uZGl0aW9ucy4iLCJzdGFuZGFyZCI6IlVzZSB0aGlzIHRvIGxpbmsgZWFjaCBjb2VmZmljaWVudCB0byBpdHMgb3BlcmF0aW9uIG9uIHRoZSBjb25jZWFsZWQgZXhwcmVzc2lvbi4iLCJ0b3Bfc2NvcmUiOiJVc2UgdGhpcyB0byBlbXBoYXNpemUgZGVyaXZhdGl2ZSBvcmRlciBhbmQgZmFjdG9yaWFsIHNjYWxpbmcuIn0=" style="display:none;"></div>%%KC_END%%
*🎨 Workflow for extracting repeated-factor coefficients: conceal \((x-\lambda)^r\), then apply successive derivatives with factorial scaling.*
![Illustration](/generated/gptimage2-1777215708882-7072.png)

## 2. One Worked Exam Pattern

Let \(F(x) = \dfrac{4x^3+16x^2+23x+13}{(x+1)^3(x+2)}\).

**Template first:**
$$F(x) = \frac{a_0}{(x+1)^3}+\frac{a_1}{(x+1)^2}+\frac{a_2}{x+1}+\frac{k}{x+2}$$

**Step 1 — cover-up for the unrepeated factor at \(x=-2\):**
$$k = \left.\frac{4x^3+16x^2+23x+13}{(x+1)^3}\right|_{x=-2} = \frac{-32+64-46+13}{(-1)^3} = \frac{-1}{-1} = 1$$

**Step 2 — conceal \((x+1)^3\):** define \(G(x) = (x+1)^3 F(x) = \dfrac{4x^3+16x^2+23x+13}{x+2}\).

**Step 3 — \(a_0 = G(-1)\):** \(G(-1) = \dfrac{-4+16-23+13}{1} = \dfrac{2}{1} = 2\).

**Step 4 — \(a_1 = G'(-1)\):** differentiating \(G(x)\) and evaluating at \(x=-1\) gives \(a_1 = 1\).

**Step 5 — \(a_2 = \frac{1}{2!}G''(-1)\):** gives \(a_2 = 3\).

**Final result:**
$$F(x)=\frac{2}{(x+1)^3}+\frac{1}{(x+1)^2}+\frac{3}{x+1}+\frac{1}{x+2}$$

If you can name which coefficient comes from which derivative order, this problem becomes routine.

---
**📌 Key Takeaways**
- A repeated factor \((x-\lambda)^r\) requires exactly \(r\) stacked partial-fraction terms, one per power down to 1.
- Conceal \((x-\lambda)^r\) to form \(G(x)\), then use \(a_j = \frac{1}{j!}G^{(j)}(\lambda)\) for each coefficient.
- Most common trap: skipping intermediate powers or forgetting the \(\frac{1}{j!}\) factorial scaling for \(j \geq 2\).

*In the next section we will see when repeated differentiation becomes cumbersome and how another method can reduce the work.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InRlbXBsYXRlX3JlY29nbml0aW9uIiwibGFiZWwiOiJSZWNvZ25pemUgdGhlIGNvcnJlY3QgcGFydGlhbC1mcmFjdGlvbiB0ZW1wbGF0ZSBmb3IgYSByZXBlYXRlZCBmYWN0b3IiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDFfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IldoaWNoIGlzIHRoZSBjb3JyZWN0IHBhcnRpYWwtZnJhY3Rpb24gZm9ybSBmb3IgXFwoXFxkZnJhY3tQKHgpfXsoeC0xKV4zKHgrNCl9XFwpPyIsIm9wdGlvbnMiOlsiQS4gXFwoXFxkZnJhY3tBfXsoeC0xKV4zfStcXGRmcmFje0J9e3gtMX0rXFxkZnJhY3tDfXt4KzR9XFwpIiwiQi4gXFwoXFxkZnJhY3tBfXsoeC0xKV4zfStcXGRmcmFje0J9eyh4LTEpXjJ9K1xcZGZyYWN7Q317eC0xfStcXGRmcmFje0R9e3grNH1cXCkiLCJDLiBcXChcXGRmcmFje0F9e3gtMX0rXFxkZnJhY3tCfXt4KzR9XFwpIiwiRC4gXFwoXFxkZnJhY3tBfXsoeC0xKV4yfStcXGRmcmFje0J9e3grNH1cXCkiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJBIHJlcGVhdGVkIGZhY3RvciBvZiBvcmRlciAzIHJlcXVpcmVzIHRocmVlIHN0YWNrZWQgdGVybXM6IGRlbm9taW5hdG9ycyBcXCgoeC0xKV4zXFwpLCBcXCgoeC0xKV4yXFwpLCBhbmQgXFwoKHgtMSlcXCksIHBsdXMgb25lIHRlcm0gZm9yIHRoZSB1bnJlcGVhdGVkIGZhY3RvciBcXCgoeCs0KVxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJJdCBza2lwcyB0aGUgXFwoKHgtMSleMlxcKSB0ZXJtLCB3aGljaCBpcyBhIHN0YW5kYXJkIHJlcGVhdGVkLWZhY3RvciBlcnJvci4iLCJDIjoiSXQgdHJlYXRzIHRoZSByZXBlYXRlZCBmYWN0b3IgYXMgaWYgaXQgd2VyZSB1bnJlcGVhdGVkLiIsIkQiOiJJdCBvbWl0cyB0d28gcmVxdWlyZWQgdGVybXMgZnJvbSB0aGUgcmVwZWF0ZWQtZmFjdG9yIGNoYWluLiJ9LCJoaW50IjoiT3JkZXIgMyBtZWFucyB0aHJlZSB0ZXJtcywgb25lIGZvciBlYWNoIHBvd2VyIGRvd24gdG8gMS4iLCJuZWVkc192aXN1YWwiOnRydWUsInZpc3VhbF90eXBlIjoiZ2VuZXJhdGVkX2ltYWdlIiwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoia3AxX3EyIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJJZiBhIGRlbm9taW5hdG9yIGNvbnRhaW5zIFxcKCh4KzIpXjIoeC01KSh4KzEpXFwpLCBob3cgbWFueSBwYXJ0aWFsLWZyYWN0aW9uIHRlcm1zIGNvbWUgZnJvbSB0aGUgcmVwZWF0ZWQgZmFjdG9yIFxcKCh4KzIpXjJcXCk/Iiwib3B0aW9ucyI6WyJBLiAxIiwiQi4gMiIsIkMuIDMiLCJELiA0Il0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiQSByZXBlYXRlZCBmYWN0b3Igb2Ygb3JkZXIgMiBjb250cmlidXRlcyBleGFjdGx5IHR3byB0ZXJtczogb25lIG92ZXIgXFwoKHgrMileMlxcKSBhbmQgb25lIG92ZXIgXFwoKHgrMilcXCkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhhdCB3b3VsZCBiZSB0cnVlIG9ubHkgZm9yIGFuIHVucmVwZWF0ZWQgZmFjdG9yLiIsIkMiOiJUaHJlZSB0ZXJtcyB3b3VsZCBjb3JyZXNwb25kIHRvIG9yZGVyIDMsIG5vdCBvcmRlciAyLiIsIkQiOiJUaGlzIGNvdW50cyB1bnJlbGF0ZWQgZmFjdG9ycyB0b28uIn0sImhpbnQiOiJUaGUgZXhwb25lbnQgb24gdGhlIHJlcGVhdGVkIGZhY3RvciB0ZWxscyB5b3UgaG93IG1hbnkgc3RhY2tlZCB0ZXJtcyBpdCBjcmVhdGVzLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoiY29lZmZpY2llbnRfcnVsZXMiLCJsYWJlbCI6IlVzZSBjb3Zlci11cCBhbmQgZGVyaXZhdGl2ZXMgdG8gZ2V0IHJlcGVhdGVkLWZhY3RvciBjb2VmZmljaWVudHMiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDJfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkxldCBcXChHKHgpPSh4LVxcbGFtYmRhKV5yRih4KVxcKS4gV2hpY2ggc3RhdGVtZW50IGlzIGNvcnJlY3Q/Iiwib3B0aW9ucyI6WyJBLiBcXChhXzA9RycoXFxsYW1iZGEpXFwpIiwiQi4gXFwoYV8xPUcoXFxsYW1iZGEpXFwpIiwiQy4gXFwoYV8wPUcoXFxsYW1iZGEpXFwpIiwiRC4gXFwoYV8yPUcnJyhcXGxhbWJkYSlcXCkiXSwiY29ycmVjdF9vcHRpb24iOiJDIiwiZXhwbGFuYXRpb24iOiJBZnRlciBjb25jZWFsaW5nIHRoZSByZXBlYXRlZCBmYWN0b3IsIHRoZSBjb25zdGFudCB0ZXJtIGluIHRoZSBleHBhbnNpb24gaXMgb2J0YWluZWQgZGlyZWN0bHkgYnkgZXZhbHVhdGluZyB0aGUgcmVtYWluaW5nIGV4cHJlc3Npb24gYXQgdGhlIHJlcGVhdGVkIHJvb3QuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhlIGZpcnN0IGRlcml2YXRpdmUgZ2l2ZXMgXFwoYV8xXFwpLCBub3QgXFwoYV8wXFwpLiIsIkIiOiJEaXJlY3QgZXZhbHVhdGlvbiBnaXZlcyBcXChhXzBcXCksIG5vdCBcXChhXzFcXCkuIiwiRCI6IkZvciBcXChhXzJcXCksIHRoZSBjb3JyZWN0IHJ1bGUgaXMgXFwoYV8yPVxcZGZyYWN7MX17MiF9RycnKFxcbGFtYmRhKVxcKS4ifSwiaGludCI6IlN0YXJ0IHdpdGggemVybyBkZXJpdmF0aXZlcyBmb3IgdGhlIHRvcC1wb3dlciBjb2VmZmljaWVudC4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDJfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkZvciBhIHJlcGVhdGVkIGZhY3RvciBcXCgoeC0zKV4zXFwpLCB3aGljaCBmb3JtdWxhIGdpdmVzIHRoZSBjb2VmZmljaWVudCBvZiBcXChcXGRmcmFjezF9e3gtM31cXCk/Iiwib3B0aW9ucyI6WyJBLiBcXChHKDMpXFwpIiwiQi4gXFwoRycoMylcXCkiLCJDLiBcXChcXGRmcmFjezF9ezIhfUcnJygzKVxcKSIsIkQuIFxcKFxcZGZyYWN7MX17MyF9RycnJygzKVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkMiLCJleHBsYW5hdGlvbiI6IklmIFxcKCh4LTMpXjNcXCkgcHJvZHVjZXMgXFwoXFxkZnJhY3thXzB9eyh4LTMpXjN9K1xcZGZyYWN7YV8xfXsoeC0zKV4yfStcXGRmcmFje2FfMn17eC0zfVxcKSwgdGhlbiB0aGUgY29lZmZpY2llbnQgb2YgXFwoXFxkZnJhY3sxfXt4LTN9XFwpIGlzIFxcKGFfMlxcKSwgYW5kIHRoZSBydWxlIGlzIFxcKGFfMj1cXGRmcmFjezF9ezIhfUcnJygzKVxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGF0IGdpdmVzIHRoZSBjb2VmZmljaWVudCBvZiBcXChcXGRmcmFjezF9eyh4LTMpXjN9XFwpLiIsIkIiOiJUaGF0IGdpdmVzIHRoZSBjb2VmZmljaWVudCBvZiBcXChcXGRmcmFjezF9eyh4LTMpXjJ9XFwpLiIsIkQiOiJBIHRoaXJkIGRlcml2YXRpdmUgaXMgbm90IG5lZWRlZCBiZWNhdXNlIHRoZSBpbmRleCBoZXJlIGlzIDIsIG5vdCAzLiJ9LCJoaW50IjoiTWF0Y2ggdGhlIGNvZWZmaWNpZW50IGluZGV4IHRvIHRoZSBkZXJpdmF0aXZlIG9yZGVyLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoid29ya2VkX2V4YW1wbGVfYXBwbGljYXRpb24iLCJsYWJlbCI6IkFwcGx5IHRoZSBydWxlIHRvIHRoZSB0ZXh0Ym9vay1zdHlsZSBleGFtcGxlIiwiaW1wb3J0YW5jZSI6Im1lZGl1bSIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6MX0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDNfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkluIEV4YW1wbGUgQi4xMCwgXFwoRih4KT1cXGRmcmFjezR4XjMrMTZ4XjIrMjN4KzEzfXsoeCsxKV4zKHgrMil9XFwpLiBXaGljaCBjb2VmZmljaWVudCBpcyBmb3VuZCBieSBvcmRpbmFyeSBjb3Zlci11cCBhdCBcXCh4PS0yXFwpPyIsIm9wdGlvbnMiOlsiQS4gXFwoYV8wXFwpIiwiQi4gXFwoYV8xXFwpIiwiQy4gXFwoYV8yXFwpIiwiRC4gXFwoa1xcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkQiLCJleHBsYW5hdGlvbiI6IlRoZSBmYWN0b3IgXFwoKHgrMilcXCkgaXMgdW5yZXBlYXRlZCwgc28gaXRzIGNvZWZmaWNpZW50IGlzIHRoZSBvbmUgZm91bmQgYnkgb3JkaW5hcnkgSGVhdmlzaWRlIGNvdmVyLXVwIGF0IGl0cyByb290LiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoaXMgYmVsb25ncyB0byB0aGUgcmVwZWF0ZWQgZmFjdG9yIFxcKCh4KzEpXjNcXCkuIiwiQiI6IlRoaXMgaXMgb2J0YWluZWQgZnJvbSBhIGRlcml2YXRpdmUgYWZ0ZXIgY29uY2VhbGluZyBcXCgoeCsxKV4zXFwpLiIsIkMiOiJUaGlzIGFsc28gYmVsb25ncyB0byB0aGUgcmVwZWF0ZWQtZmFjdG9yIGNoYWluIGFuZCBuZWVkcyBoaWdoZXItb3JkZXIgZGlmZmVyZW50aWF0aW9uLiJ9LCJoaW50IjoiT3JkaW5hcnkgY292ZXItdXAgYXBwbGllcyBkaXJlY3RseSBvbmx5IHRvIHVucmVwZWF0ZWQgZmFjdG9ycy4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfSx7ImlkIjoia3AzX3EyIiwidHlwZSI6InNob3J0X2Fuc3dlciIsInN0ZW0iOiJGb3IgdGhlIHNhbWUgZXhhbXBsZSwgc3RhdGUgdGhlIGZpbmFsIHBhcnRpYWwtZnJhY3Rpb24gZXhwYW5zaW9uLiIsImlkZWFsX2Fuc3dlciI6IlxcKEYoeCk9XFxkZnJhY3syfXsoeCsxKV4zfStcXGRmcmFjezF9eyh4KzEpXjJ9K1xcZGZyYWN7M317eCsxfStcXGRmcmFjezF9e3grMn1cXCkiLCJncmFkaW5nX3J1YnJpYyI6WyJNdXN0IGluY2x1ZGUgYWxsIGZvdXIgdGVybXMiLCJNdXN0IG1hdGNoIGNvZWZmaWNpZW50cyAyLCAxLCAzLCBhbmQgMSBjb3JyZWN0bHkiLCJNdXN0IHBsYWNlIGVhY2ggY29lZmZpY2llbnQgb24gdGhlIGNvcnJlY3QgZGVub21pbmF0b3IgcG93ZXIiXSwiZXhwbGFuYXRpb24iOiJUaGlzIGNoZWNrcyB3aGV0aGVyIHRoZSBzdHVkZW50IGNhbiBjb252ZXJ0IHRoZSBjb2VmZmljaWVudCByZXN1bHRzIGludG8gdGhlIGNvcnJlY3RseSBvcmRlcmVkIGZpbmFsIGV4cGFuc2lvbi4iLCJoaW50IjoiV3JpdGUgdGhlIHJlcGVhdGVkLWZhY3RvciBjaGFpbiBmaXJzdCwgdGhlbiBhcHBlbmQgdGhlIHVucmVwZWF0ZWQtZmFjdG9yIHRlcm0uIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfV19" style="display:none;"></div>%%KC_END%%
