# PL/SQL

## Exercise 1: Control Structures

### Q1)

```sql
DECLARE
cursor c1 is select customer_id from customers where age >=60;

BEGIN
for c in c1 loop
    update loans set interest_rate = interest_rate - 1 where customer_id = c.customer_id;
end loop;
END;
/
```

### Q2)

```sql
DECLARE
cursor c1 is select customer_id from customers where balance >=10000;

BEGIN
for c in c1 loop
    update customers set IsVIP = True where customer_id = c.customer_id;
end loop;
END;
/
```

### Q3)

```sql
DECLARE
v_name customers.customer_name%TYPE;
cursor c1 is select customer_id from loans where due_date-SYSDATE <= 30;

BEGIN
for c in c1 loop
    select customer_name into v_name from customers where customer_id = c.customer_id;
    DBMS_OUTPUT.PUT_LINE(
        'Reminder: Loan due soon for customer ' || v_name
    );
end loop;
END;
/
```

## Exercise 3: Stored Procedures

### Q1)

```sql
create or replace procedure ProcessMonthlyInterest
is

begin
update accounts set balance = balance + (balance * 0.01) where account_type = 'SAVINGS';
end;
/
```

### Q2)

```sql
create or replace procedure updateemployeebonus(
p_department in varchar2,
p_bonus_percentage in number

)
is

begin
update employees set salary = salary + (salary * p_bonus_percentage / 100) where department = p_department;
end;
/
```

### Q3)

```sql
create or replace procedure transferfunds(
p_from_account in number,
p_to_account in number,
p_amount in number

)

is
v_balance number;

begin
select balance into v_balance from accounts where account_id = p_from_account;
if v_balance >= p_amount then
    update accounts set balance = balance - p_amount where account_id = p_from_account;
    update accounts set balance = balance + p_amount where account_id = p_to_account;
else
    dbms_output.put_line('insufficient balance');
end if;
end;
/
```
