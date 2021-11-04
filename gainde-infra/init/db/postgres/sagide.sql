--
-- PostgreSQL database dump
--

-- Dumped from database version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.10 (Ubuntu 10.10-0ubuntu0.18.04.1)

-- Started on 2019-11-11 15:38:46 CET

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;

--
-- TOC entry 2954 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner:
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 198 (class 1259 OID 16599)
-- Name: squirel_badge; Type: TABLE; Schema: public; Owner: dbuser
--

CREATE TABLE public.squirel_badge (
    external_reference character varying,
    creation_date timestamp without time zone,
    badge_status_id integer,
    badge_id integer NOT NULL,
    person_id integer,
    status_modification_date timestamp without time zone
);


ALTER TABLE public.squirel_badge OWNER TO dbuser;

--
-- TOC entry 200 (class 1259 OID 16614)
-- Name: squirel_badge_comp_data; Type: TABLE; Schema: public; Owner: dbuser
--

CREATE TABLE public.squirel_badge_comp_data (
    value integer NOT NULL,
    data_id integer NOT NULL,
    resource_id integer NOT NULL,
    creation_date timestamp without time zone
);


ALTER TABLE public.squirel_badge_comp_data OWNER TO dbuser;

--
-- TOC entry 197 (class 1259 OID 16592)
-- Name: squirel_badge_serial_number; Type: TABLE; Schema: public; Owner: dbuser
--

CREATE TABLE public.squirel_badge_serial_number (
    serial_number integer NOT NULL,
    badge_id integer
);


ALTER TABLE public.squirel_badge_serial_number OWNER TO dbuser;

--
-- TOC entry 196 (class 1259 OID 16589)
-- Name: squirel_badge_status; Type: TABLE; Schema: public; Owner: dbuser
--

CREATE TABLE public.squirel_badge_status (
    badge_status_id integer NOT NULL
);


ALTER TABLE public.squirel_badge_status OWNER TO dbuser;

--
-- TOC entry 199 (class 1259 OID 16608)
-- Name: squirel_person; Type: TABLE; Schema: public; Owner: dbuser
--

CREATE TABLE public.squirel_person (
    external_reference character varying,
    end_date timestamp without time zone,
    photo_rights_setting_id integer,
    person_id integer NOT NULL
);


ALTER TABLE public.squirel_person OWNER TO dbuser;

--
-- TOC entry 201 (class 1259 OID 16617)
-- Name: squirel_person_comp_data; Type: TABLE; Schema: public; Owner: dbuser
--

CREATE TABLE public.squirel_person_comp_data (
    resource_id integer,
    value character varying,
    data_id integer NOT NULL
);


ALTER TABLE public.squirel_person_comp_data OWNER TO dbuser;

--
-- TOC entry 2942 (class 0 OID 16599)
-- Dependencies: 198
-- Data for Name: squirel_badge; Type: TABLE DATA; Schema: public; Owner: dbuser
--

INSERT INTO public.squirel_badge (external_reference, creation_date, badge_status_id, badge_id, person_id, status_modification_date) VALUES ('13808', NULL, 986, 1, 1, '2019-11-30 14:57:49');
INSERT INTO public.squirel_badge (external_reference, creation_date, badge_status_id, badge_id, person_id, status_modification_date) VALUES ('13809', NULL, 987, 2, 2, '2019-11-20 14:57:49');


--
-- TOC entry 2944 (class 0 OID 16614)
-- Dependencies: 200
-- Data for Name: squirel_badge_comp_data; Type: TABLE DATA; Schema: public; Owner: dbuser
--

INSERT INTO public.squirel_badge_comp_data (value, data_id, resource_id, creation_date) VALUES (1, 1035, 1, '2019-11-30 14:57:49');
INSERT INTO public.squirel_badge_comp_data (value, data_id, resource_id, creation_date) VALUES (2, 1020, 2, '2019-11-20 14:57:49');
INSERT INTO public.squirel_badge_comp_data (value, data_id, resource_id, creation_date) VALUES (3, 1035, 2, '2019-11-25 14:30:30');


--
-- TOC entry 2941 (class 0 OID 16592)
-- Dependencies: 197
-- Data for Name: squirel_badge_serial_number; Type: TABLE DATA; Schema: public; Owner: dbuser
--

INSERT INTO public.squirel_badge_serial_number (serial_number, badge_id) VALUES (1, 1);
INSERT INTO public.squirel_badge_serial_number (serial_number, badge_id) VALUES (2, 2);


--
-- TOC entry 2940 (class 0 OID 16589)
-- Dependencies: 196
-- Data for Name: squirel_badge_status; Type: TABLE DATA; Schema: public; Owner: dbuser
--

INSERT INTO public.squirel_badge_status (badge_status_id) VALUES (986);
INSERT INTO public.squirel_badge_status (badge_status_id) VALUES (987);


--
-- TOC entry 2943 (class 0 OID 16608)
-- Dependencies: 199
-- Data for Name: squirel_person; Type: TABLE DATA; Schema: public; Owner: dbuser
--

INSERT INTO public.squirel_person (external_reference, end_date, photo_rights_setting_id, person_id) VALUES ('13808', NULL, 7, 1);
INSERT INTO public.squirel_person (external_reference, end_date, photo_rights_setting_id, person_id) VALUES ('13909', NULL, 8, 2);
INSERT INTO public.squirel_person (external_reference, end_date, photo_rights_setting_id, person_id) VALUES ('13909', NULL, 7, 3);


--
-- TOC entry 2945 (class 0 OID 16617)
-- Dependencies: 201
-- Data for Name: squirel_person_comp_data; Type: TABLE DATA; Schema: public; Owner: dbuser
--

INSERT INTO public.squirel_person_comp_data (resource_id, value, data_id) VALUES (1, 'PNA', 1);
INSERT INTO public.squirel_person_comp_data (resource_id, value, data_id) VALUES (2, 'AGT', 2);
INSERT INTO public.squirel_person_comp_data (resource_id, value, data_id) VALUES (3, '0000000006', 1007);


--
-- TOC entry 2816 (class 2606 OID 16638)
-- Name: squirel_badge_comp_data squirel_badge_comp_data_pkey; Type: CONSTRAINT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public.squirel_badge_comp_data
    ADD CONSTRAINT squirel_badge_comp_data_pkey PRIMARY KEY (value);


--
-- TOC entry 2812 (class 2606 OID 16624)
-- Name: squirel_badge squirel_badge_pkey; Type: CONSTRAINT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public.squirel_badge
    ADD CONSTRAINT squirel_badge_pkey PRIMARY KEY (badge_id);


--
-- TOC entry 2810 (class 2606 OID 16628)
-- Name: squirel_badge_serial_number squirel_badge_serial_number_pkey; Type: CONSTRAINT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public.squirel_badge_serial_number
    ADD CONSTRAINT squirel_badge_serial_number_pkey PRIMARY KEY (serial_number);


--
-- TOC entry 2808 (class 2606 OID 16630)
-- Name: squirel_badge_status squirel_badge_status_pkey; Type: CONSTRAINT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public.squirel_badge_status
    ADD CONSTRAINT squirel_badge_status_pkey PRIMARY KEY (badge_status_id);


--
-- TOC entry 2818 (class 2606 OID 16634)
-- Name: squirel_person_comp_data squirel_person_comp_data_pkey; Type: CONSTRAINT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public.squirel_person_comp_data
    ADD CONSTRAINT squirel_person_comp_data_pkey PRIMARY KEY (data_id);


--
-- TOC entry 2814 (class 2606 OID 16632)
-- Name: squirel_person squirel_person_pkey; Type: CONSTRAINT; Schema: public; Owner: dbuser
--

ALTER TABLE ONLY public.squirel_person
    ADD CONSTRAINT squirel_person_pkey PRIMARY KEY (person_id);


--
-- TOC entry 2953 (class 0 OID 0)
-- Dependencies: 6
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: dbuser
--

GRANT ALL ON SCHEMA public TO PUBLIC;
GRANT ALL ON SCHEMA public TO dbuser;


-- Completed on 2019-11-11 15:38:46 CET

--
-- PostgreSQL database dump complete
--
